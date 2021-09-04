import { createContext, useReducer } from "react";
import { localizationReducer } from "../functions";

export const LocalizationContext = createContext();

export const LocalizationProvider = ({ children }) => {
  const [
    { language, location, showCountryList, showLanguageList },
    localizationDispatch,
  ] = useReducer(localizationReducer, {
    language: "English",
    location: "India",
    showCountryList: false,
    showLanguageList: false,
  });

  return (
    <LocalizationContext.Provider
      value={{
        language,
        location,
        localizationDispatch,
        showCountryList,
        showLanguageList,
      }}
    >
      {children}
    </LocalizationContext.Provider>
  );
};
