import { currencies } from "../../data/localization";
import { Flag } from "../";
import { useLocalization } from "../../customHooks";
import "./localization-styles.css";
import { translate } from "../../functions";

export const LocationList = () => {
  const {
    location,
    language,
    localizationDispatch,
    showCountryList
  } = useLocalization();

  return (
    <ul className={`location-list ${showCountryList && "show"}`}>
      {currencies.map((currency) => {
        const { country } = currency;
        return (
          <li
            key={country}
            className={`country ${location === country && "highlight"} `}
            onClick={() => {
              localizationDispatch({ type: "SET_LOCATION", payload: country });
            }}
          >
            <span className="country__flag">
              <Flag country={country} />
            </span>
            <p className="country__name">{translate(country, language)}</p>
          </li>
        );
      })}
    </ul>
  );
};
