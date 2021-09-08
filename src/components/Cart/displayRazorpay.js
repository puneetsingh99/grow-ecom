import { apiNewOrder, apiPaymentSuccess, apiRazorpayCheckout } from "../../api";
import { loadScript } from "./loadScript";
import { logoSrc } from "../../utils";
import axios from "axios";

async function displayRazorpay(total, currencyISOCode) {
  const res = await loadScript(apiRazorpayCheckout());

  if (!res) {
    alert("Razorpay SDK failed to load. Are you online?");
    return;
  }

  const result = await axios.post(apiNewOrder(), { total, currencyISOCode });

  if (!result) {
    alert("Server error. Are you online?");
    return;
  }

  const { amount, id: order_id, currency } = result.data;

  const options = {
    key: "rzp_test_I5zCOf9kTspGI9",
    amount: amount.toString(),
    currency: currency,
    name: "Grow: Books, Courses on Investing, Stock Market and Personal finance",
    description: "Place your order",
    image: logoSrc,
    order_id: order_id,
    handler: async function (response) {
      const data = {
        orderCreationId: order_id,
        razorpayPaymentId: response.razorpay_payment_id,
        razorpayOrderId: response.razorpay_order_id,
        razorpaySignature: response.razorpay_signature,
      };

      const result = await axios.post(apiPaymentSuccess(), data);

      alert(result.data.msg);
    },
    prefill: {
      name: "Puneet Singh",
      email: "puneetsingh@example.com",
      contact: "8938989389",
    },
    notes: {
      address: "Mumbai, MH",
    },
    theme: {
      color: "#111827",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}

export { displayRazorpay };
