import { isEmail } from "validator";

export const initialLoginState = {
  email: "",
  password: "",
  error: null,
  status: "idle",
  showPassword: false,
};

export const initialSignupState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  error: null,
  status: "idle",
  showPassword: false,
};

export const validateLoginForm = (email, password) => {
  let isLoginFormValid = true;
  let message = "Form is valid";

  if (email.length === 0) {
    return { isFormValid: false, message: "Email cannot be empty" };
  }

  if (password.length === 0) {
    return { isFormValid: false, message: "Password cannot be empty" };
  }

  if (!isEmail(email)) {
    return { isFormValid: false, message: "Please enter a valid email" };
  }

  return { isLoginFormValid, message };
};

export const validateSignupForm = (signupFormFields) => {
  const { name, email, password, confirmPassword } = signupFormFields;

  let isSignupFormValid = true;
  let message = "Form is valid";

  if (name.length === 0) {
    return { isFormValid: false, message: "Name cannot be empty" };
  }

  if (email.length === 0) {
    return { isFormValid: false, message: "Email cannot be empty" };
  }

  if (password.length === 0) {
    return { isFormValid: false, message: "Password cannot be empty" };
  }

  if (confirmPassword.length === 0) {
    return { isFormValid: false, message: "Confirm Password cannot be empty" };
  }

  if (!isEmail(email)) {
    return { isFormValid: false, message: "Please enter a valid email" };
  }

  if (!(password === confirmPassword)) {
    return { isFormValid: false, message: "Passwords do not match" };
  }

  return { isSignupFormValid, message };
};
