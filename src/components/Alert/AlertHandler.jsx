import { useEffect } from "react";
import "./alert-styles.css";
import { Alert } from "./Alert";

export const AlertHandler = ({ type, message, setAlert }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert({ show: false, type: "", message: "" });
    }, 3000);
    return () => clearTimeout(timer);
  });
  return <Alert type={type} message={message} />;
};
