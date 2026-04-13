const queue = [];
let processing = false;

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runWithRetry(fn, maxRetries = 3) {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      const is429 = err.status === 429 || (err.message && err.message.includes('429'));
      if (is429 && attempt < maxRetries - 1) {
        const waitMs = 8000 * (attempt + 1); // 8s, 16s, 24s
        console.log(`[RateLimit] 429 received, retrying in ${waitMs / 1000}s (attempt ${attempt + 1}/${maxRetries})...`);
        await sleep(waitMs);
        continue;
      }
      throw err;
    }
  }
}

async function processQueue() {
  if (processing) return;
  processing = true;
  while (queue.length > 0) {
    const { resolve, reject, fn } = queue.shift();
    try {
      const result = await runWithRetry(fn);
      resolve(result);
    } catch (err) {
      reject(err);
    }
    // 5 seconds between requests to stay within free tier (12 RPM)
    if (queue.length > 0) await sleep(5000);
  }
  processing = false;
}

export function enqueue(fn) {
  return new Promise((resolve, reject) => {
    queue.push({ resolve, reject, fn });
    processQueue();
  });
}
