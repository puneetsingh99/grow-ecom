import { toast } from "react-toastify";

const toastConfig = {
  theme: "dark",
  position: "bottom-center",
  autoClose: 4000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const notify = (message, type) => {
  const toastTypes = {
    success: () => toast.success(message, toastConfig),
    info: () => toast.info(message, toastConfig),
    warning: () => toast.warning(message, toastConfig),
    error: () => toast.error(message, toastConfig),
  };

  const selectedToast = toastTypes[type];

  selectedToast ? selectedToast() : toast(message, toastConfig);
};
