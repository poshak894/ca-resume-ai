// CA Articleship Interview Question Bank
// Covers all firms × all topics with 6 questions each (Easy×2, Medium×2, Hard×2)

const Q = {
  Accounts: {
    common: [
      { id:1, question:"What is the difference between capital expenditure and revenue expenditure?", difficulty:"Easy", why_asked:"Tests basic accounting classification knowledge every CA student must know." },
      { id:2, question:"Explain the accounting equation and give an example.", difficulty:"Easy", why_asked:"Foundational concept showing understanding of double-entry bookkeeping." },
      { id:3, question:"What are the key differences between IFRS and Ind AS?", difficulty:"Medium", why_asked:"Tests awareness of Indian accounting standards and global convergence." },
      { id:4, question:"How is depreciation treated under the Written Down Value method vs Straight Line Method?", difficulty:"Medium", why_asked:"Common practical concept in client work and financial statements." },
      { id:5, question:"What adjustments are made during consolidation of financial statements?", difficulty:"Hard", why_asked:"Tests advanced knowledge relevant to Big 4 group audit work." },
      { id:6, question:"How do you account for deferred tax assets and liabilities under Ind AS 12?", difficulty:"Hard", why_asked:"Complex standard frequently tested in professional work environments." },
    ],
  },
  Taxation: {
    common: [
      { id:1, question:"What is the difference between direct tax and indirect tax? Give examples.", difficulty:"Easy", why_asked:"Basic tax classification knowledge expected from all CA students." },
      { id:2, question:"What is TDS and when is it applicable?", difficulty:"Easy", why_asked:"TDS is a daily task in articleship — firms expect practical knowledge." },
      { id:3, question:"Explain the concept of Input Tax Credit under GST.", difficulty:"Medium", why_asked:"GST ITC reconciliation is a core task in tax articleship work." },
      { id:4, question:"What is the difference between tax avoidance, tax planning, and tax evasion?", difficulty:"Medium", why_asked:"Tests ethical awareness and conceptual clarity, important for client advisory." },
      { id:5, question:"How does transfer pricing work and when is it applicable in India?", difficulty:"Hard", why_asked:"Relevant for Big 4 international tax teams and high-value clients." },
      { id:6, question:"Explain GAAR (General Anti-Avoidance Rules) and its implications on tax planning.", difficulty:"Hard", why_asked:"Advanced concept tested by firms with complex tax advisory practices." },
    ],
  },
  Audit: {
    common: [
      { id:1, question:"What is the difference between internal audit and statutory audit?", difficulty:"Easy", why_asked:"Core distinction every auditing articleship candidate must know." },
      { id:2, question:"What are audit assertions and why are they important?", difficulty:"Easy", why_asked:"Audit assertions guide the entire audit process — must-know concept." },
      { id:3, question:"What is materiality in audit and how is it determined?", difficulty:"Medium", why_asked:"Materiality determination is a key judgment call in every audit engagement." },
      { id:4, question:"Explain the concept of audit risk and its three components.", difficulty:"Medium", why_asked:"Risk-based audit approach is the foundation of modern audit methodology." },
      { id:5, question:"How do you audit revenue recognition for a service company under Ind AS 115?", difficulty:"Hard", why_asked:"Revenue audit is high-risk and tested heavily in Big 4 technical rounds." },
      { id:6, question:"What are the key procedures for auditing related party transactions?", difficulty:"Hard", why_asked:"Related party risks are a focus area for regulators and audit committees." },
    ],
  },
  "Company Law": {
    common: [
      { id:1, question:"What is the difference between a private limited and public limited company?", difficulty:"Easy", why_asked:"Basic company law distinction relevant to all corporate clients." },
      { id:2, question:"What documents are required to incorporate a company in India?", difficulty:"Easy", why_asked:"Incorporation is a common task performed during articleship." },
      { id:3, question:"What is the role of a Director in a company and their fiduciary duties?", difficulty:"Medium", why_asked:"Director responsibilities are central to corporate governance work." },
      { id:4, question:"Explain the concept of 'piercing the corporate veil' with an example.", difficulty:"Medium", why_asked:"Tests deeper understanding of corporate legal principles." },
      { id:5, question:"What are the key provisions of NCLT under the Companies Act 2013?", difficulty:"Hard", why_asked:"Relevant for firms involved in mergers, insolvency and restructuring work." },
      { id:6, question:"How does the Insolvency and Bankruptcy Code (IBC) 2016 work? Explain the CIRP process.", difficulty:"Hard", why_asked:"IBC is a critical area for Big 4 advisory and restructuring practice." },
    ],
  },
  "Cost Accounting": {
    common: [
      { id:1, question:"What is the difference between marginal costing and absorption costing?", difficulty:"Easy", why_asked:"Foundational cost accounting concept with direct impact on profit reporting." },
      { id:2, question:"What is a cost centre and how does it differ from a profit centre?", difficulty:"Easy", why_asked:"Cost centers are frequently encountered in management accounting assignments." },
      { id:3, question:"How is activity-based costing (ABC) different from traditional costing?", difficulty:"Medium", why_asked:"ABC is used by modern firms and tests understanding of overhead allocation." },
      { id:4, question:"Explain variance analysis with a practical example for materials.", difficulty:"Medium", why_asked:"Variance analysis is a core task in cost audit and management reporting." },
      { id:5, question:"How do you apply the concept of transfer pricing in management accounting?", difficulty:"Hard", why_asked:"Internal transfer pricing is relevant to multi-division audit clients." },
      { id:6, question:"What is throughput accounting and how does it differ from contribution analysis?", difficulty:"Hard", why_asked:"Advanced management accounting concept tested by consulting-focused firms." },
    ],
  },
  "Soft Skills": {
    common: [
      { id:1, question:"How do you manage your time when handling multiple client assignments simultaneously?", difficulty:"Easy", why_asked:"Time management is critical in articleship where multiple deadlines coexist." },
      { id:2, question:"Describe a situation where you worked effectively in a team.", difficulty:"Easy", why_asked:"Teamwork is essential in audit and tax teams — firms look for collaboration." },
      { id:3, question:"How would you handle a situation where you disagree with your senior on an audit finding?", difficulty:"Medium", why_asked:"Tests professional judgment and communication skills under pressure." },
      { id:4, question:"How do you maintain work quality under tight deadlines during busy season?", difficulty:"Medium", why_asked:"Busy season stress management is a real challenge in Big 4 environments." },
      { id:5, question:"Describe a situation where you had to quickly learn a new skill or concept on the job.", difficulty:"Hard", why_asked:"Adaptability and learning agility are top traits sought in articleship candidates." },
      { id:6, question:"How would you handle a client who is uncooperative during an audit and refuses to provide documents?", difficulty:"Hard", why_asked:"Tests professionalism, escalation judgment, and client management ability." },
    ],
  },
  "Tell Me About Yourself": {
    common: [
      { id:1, question:"Walk me through your educational background and why you chose CA.", difficulty:"Easy", why_asked:"Standard opener — tests clarity of thought and career motivation." },
      { id:2, question:"What are your top three strengths and how are they relevant to articleship?", difficulty:"Easy", why_asked:"Self-awareness and relevance to the role are key evaluation criteria." },
      { id:3, question:"What subjects do you enjoy most in CA curriculum and why?", difficulty:"Medium", why_asked:"Tests genuine interest vs rote learning and ability to connect to real work." },
      { id:4, question:"Tell me about a challenging experience during your studies and how you overcame it.", difficulty:"Medium", why_asked:"Resilience and problem-solving are core competencies for articleship." },
      { id:5, question:"Where do you see yourself in your CA career 5 years from now?", difficulty:"Hard", why_asked:"Tests ambition, clarity of long-term vision, and alignment with firm culture." },
      { id:6, question:"How has your academic or work experience prepared you for a Big 4 environment specifically?", difficulty:"Hard", why_asked:"Tests self-awareness and knowledge of what Big 4 work actually involves." },
    ],
  },
  "Why CA / Why This Firm": {
    common: [
      { id:1, question:"Why did you choose to pursue Chartered Accountancy?", difficulty:"Easy", why_asked:"Firms want to know your motivation is genuine and not superficial." },
      { id:2, question:"What do you know about our firm and why did you choose us specifically?", difficulty:"Easy", why_asked:"Basic research is expected — unprepared candidates are immediately filtered out." },
      { id:3, question:"How does our firm's culture align with your personal values and work style?", difficulty:"Medium", why_asked:"Culture fit is heavily weighted in articleship selection alongside technical skills." },
      { id:4, question:"What distinguishes our firm from others you have applied to?", difficulty:"Medium", why_asked:"Tests depth of research and ability to articulate differentiated reasoning." },
      { id:5, question:"What specific practice area within our firm interests you and why?", difficulty:"Hard", why_asked:"Shows initiative, focus, and genuine excitement about the firm's work." },
      { id:6, question:"If you got an offer from another Big 4 firm as well, how would you decide and why would you still choose us?", difficulty:"Hard", why_asked:"Tests commitment, decision-making clarity, and cultural alignment depth." },
    ],
  },
};

// Firm-specific tips added to questions for known firms
const FIRM_CONTEXT = {
  "Deloitte":       "Deloitte is known for its large audit practice and strong consulting arm. Emphasize structured thinking and technology awareness.",
  "EY India":       "EY India focuses heavily on tax and advisory. Show interest in their 'Building a Better Working World' mission.",
  "PwC":            "PwC values trust, quality, and transformative work. Highlight integrity and client-centric thinking.",
  "KPMG":           "KPMG emphasizes risk and compliance. Demonstrate attention to detail and regulatory awareness.",
  "Grant Thornton": "Grant Thornton focuses on mid-market clients and entrepreneurial culture. Show adaptability and business acumen.",
  "BDO India":      "BDO India values personal service and strong client relationships. Emphasize communication and ownership mindset.",
  "Walker Chandiok":"Grant Thornton (Walker Chandiok) values entrepreneurial spirit. Show energy and willingness to own responsibilities.",
  "RSM India":      "RSM India serves mid-market clients with an international network. Highlight cross-border awareness.",
  "MSKA":           "MSKA & Associates offers close-knit teams and varied client exposure. Show flexibility and team orientation.",
};

/**
 * Get questions for a firm + topic combination
 * Returns 6 questions with firm_context as a SEPARATE field
 */
export function getQuestions(firm, topic) {
  const topicData = Q[topic] || Q["Accounts"];
  const questions = [...(topicData.common || topicData[firm] || topicData[Object.keys(topicData)[0]])];

  const firmNote = FIRM_CONTEXT[firm] || `${firm} values technical excellence and client focus.`;

  // firm_context is a separate field — NOT mixed into why_asked
  return questions.map(q => ({
    ...q,
    firm_context: firmNote,
  }));
}

export default Q;
