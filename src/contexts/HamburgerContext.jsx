import { createContext, useState } from "react";

export const HamburgerContext = createContext();
// Make  sure to  remove  it if its not being used
export const HamburgerProvider = ({ children }) => {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  return (
    <HamburgerContext.Provider
      value={{
        showHamburgerMenu,
        setShowHamburgerMenu
      }}
    >
      {children}
    </HamburgerContext.Provider>
  );
};
