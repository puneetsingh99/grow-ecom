import { toast } from "react-toastify";

export const notify = async (promise, messageObj) => {
  try {
    toast.promise(promise, messageObj, toastConfig);
  } catch (error) {
    console.error(error.message);
  }
};
