export const loginLogoutHandler = (
  isUserLoggedIn,
  setIsUserLoggedIn,
  setLoggedInUser,
  navigate
) => {
  if (!isUserLoggedIn) {
    navigate("/login");
    return;
  }
  setIsUserLoggedIn(() => false);
  setLoggedInUser(() => "");
  localStorage.setItem("userId", "");
};
