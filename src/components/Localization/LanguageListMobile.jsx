import { languages } from "../../data/localization";
import { useLocalization } from "../../customHooks";
import "./localization-styles.css";

export const LanguageListMobile = () => {
  const {
    language: currLanguage,
    localizationDispatch,
    showLanguageList
  } = useLocalization();
  

  return (
    <ul
      className={`language-list-mobile ${
        showLanguageList && `show-localization-mobile`
      }`}
    >
      {languages.map((lang) => {
        const { language } = lang;

        return (
          <li
            key={language}
            className={`language language-mobile ${
              language === currLanguage && "highlight"
            } `}
            onClick={() => {
              localizationDispatch({ type: "SET_LANGUAGE", payload: language });
            }}
          >
            <p className="language__name language__name-mobile">{language}</p>
          </li>
        );
      })}
    </ul>
  );
};
