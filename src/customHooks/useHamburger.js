import { useContext } from "react";
import { HamburgerContext } from "../contexts/HamburgerContext";

export const useHamburger = () => {
  return useContext(HamburgerContext);
};
