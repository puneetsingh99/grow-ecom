import "./hamburger-styles.css";
import { LanguageSvg, DownwardArrowSvg } from "../../assets";
import { Flag } from "../";
import { useLocalization } from "../../customHooks";
import { LocationListMobile } from "../Localization/LocationListMobile";
import { LanguageListMobile } from "../Localization/LanguageListMobile";
import { translate } from "../../functions";

export const HamburgerMenu = ({ toggle, setToggle }) => {
  const { location, language, localizationDispatch } = useLocalization();

  return (
    <aside className={`hamburger-menu-container ${toggle && "show"}`}>
      <div className={`hamburger-menu-list`} onClick={() => setToggle(true)}>
        <div>
          <div
            className="select-location"
            onClick={() => localizationDispatch({ type: "TOGGLE_COUNTRYLIST" })}
          >
            <span className={`flag-icon`}>
              <Flag country={location} />
            </span>
            <p>
              <span className={`hamburger-menu-option-title`}>
                {translate("Location", language)}
              </span>
              <span className={`flex items-center space-betwen text-3xl`}>
                <DownwardArrowSvg />
              </span>
            </p>
          </div>
          <LocationListMobile />
          <div
            className="select-language"
            onClick={() =>
              localizationDispatch({ type: "TOGGLE_LANGUAGELIST" })
            }
          >
            <span className={`language-icon language-icon-mobile`}>
              <LanguageSvg />
            </span>
            <p>
              <span className={`hamburger-menu-option-title`}>
                {translate("Language", language)}
              </span>

              <span className={`flex items-center space-betwen text-3xl`}>
                <DownwardArrowSvg />
              </span>
            </p>
          </div>
          <LanguageListMobile />
        </div>
      </div>
      <div
        className={`close-hamburger-menu`}
        onClick={() => setToggle((currState) => !currState)}
      ></div>
    </aside>
  );
};
