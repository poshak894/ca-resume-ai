import { useCallback } from 'react';
import { createOrder, verifyPayment } from '../utils/api.js';

export function usePayment({ isPro, setIsPro, hasTool, setHasTool, data, setPayM, setPayOk, showToast }) {
  const loadRazorpay = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) { resolve(true); return; }
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const startPay = useCallback(async (type) => {
    const isLoaded = await loadRazorpay();
    if (!isLoaded) {
      showToast('❌ Razorpay script failed to load');
      return;
    }

    try {
      const orderData = await createOrder(type);
      if (!orderData.orderId) throw new Error('Failed to create order');

      const options = {
        key: orderData.key,
        amount: orderData.amount,
        currency: orderData.currency,
        order_id: orderData.orderId,
        name: 'CA Resume AI',
        description: type === 'pro' ? 'Pro Plan Upgrade' : 'Tools Pack',
        handler: async function (response) {
          const result = await verifyPayment({ ...response, type });
          if (result.success) {
            if (type === 'pro') setIsPro(true);
            else setHasTool(true);
            setPayM(null);
            setPayOk(type);
            showToast('🎉 Payment verified! ' + result.paymentId);
            setTimeout(() => setPayOk(null), 5000);
          } else {
            showToast('❌ Payment verification failed');
          }
        },
        prefill: {
          name: data?.name || '',
          email: data?.email || '',
          contact: data?.phone || ''
        },
        theme: {
          color: '#006D5B'
        },
        modal: {
          ondismiss: () => showToast('Payment cancelled')
        }
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (e) {
      showToast('❌ ' + e.message);
    }
  }, [data, setIsPro, setHasTool, setPayM, setPayOk, showToast]);

  return startPay;
}
