import { useContext } from "react";
import { LocalizationContext } from "../contexts/LocalizationContext";
import { getTranslatedStrings } from "../functions";

export const useLocalization = () => {
  const {
    location,
    language,
    localizationDispatch,
    showCountryList,
    showLanguageList
  } = useContext(LocalizationContext);

  const translatedStrings = getTranslatedStrings(language);

  // const strings = translatedString(language);
  return {
    location,
    language,
    translatedStrings,
    localizationDispatch,
    showCountryList,
    showLanguageList
  };
};

// provide current currency, location and language
