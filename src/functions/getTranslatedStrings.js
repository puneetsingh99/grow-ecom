import { languages } from "../data/localization";

export const getTranslatedStrings = (language) => {
  const languageMatch = languages.filter(
    (aLanguage) => aLanguage.language === language
  );
  return languageMatch[0]["translatedStrings"];
};
