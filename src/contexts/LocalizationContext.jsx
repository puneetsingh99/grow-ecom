// a dispatch function which allows setting of the following data:
// 1. {type: "SET_LANGUAGE", payload: {language}}
// 1. {type: "SET_LOCATION", payload: {country}}

import { createContext, useReducer } from "react";
import { localizationReducer } from "../functions";

// functions:
// 1. changing currency according  to  the country
//    once the country value is  changed  in the state, an automatic network call to the exchange ////    api is made and  the new data is returned.
//    Once the new data is returned, that we need to findout the multiplication factor
//    This  factor is then passed on to the price component, along  with the currency logo
//    The price component must have  a  function which ties together both of these things and       //    updates the price automatically.
//    ALSO TRY SELECT Tag for this.

// 2. Language strings should be prebuilt, and upon selecting a particular language, that script          should load.

// Make the code mobile  first.
// finish the resonsive nav first.

export const LocalizationContext = createContext();

export const LocalizationProvider = ({ children }) => {
  // use a useReducer
  const [
    { language, location, showCountryList, showLanguageList },
    localizationDispatch
  ] = useReducer(localizationReducer, {
    language: "English",
    location: "India",
    showCountryList: false,
    showLanguageList: false
  });

  // const [showCountryList, setShowCountryList] = useState(true);
  return (
    <LocalizationContext.Provider
      value={{
        language,
        location,
        localizationDispatch,
        showCountryList,
        showLanguageList
      }}
    >
      {children}
    </LocalizationContext.Provider>
  );
};
