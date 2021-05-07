import { languages } from "../../data/localization";
import { useLocalization } from "../../customHooks";
import "./localization-styles.css";

export const LanguageList = () => {
  const {
    language: currLanguage,
    localizationDispatch,
    showLanguageList
  } = useLocalization();
  console.log({ showLanguageList });
  console.log({ currLanguage });

  return (
    <ul className={`language-list ${showLanguageList && "show"}`}>
      {languages.map((lang) => {
        const { language } = lang;

        return (
          <li
            key={language}
            className={`language ${language === currLanguage && "highlight"} `}
            onClick={() => {
              localizationDispatch({ type: "SET_LANGUAGE", payload: language });
            }}
          >
            <p className="language__name">{language}</p>
          </li>
        );
      })}
    </ul>
  );
};
