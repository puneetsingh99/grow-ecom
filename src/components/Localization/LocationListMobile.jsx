import { useLocalization } from "../../customHooks";
import { currencies } from "../../data/localization";
import { translate } from "../../functions";
import { Flag } from "../";

export const LocationListMobile = () => {
  const { location, language, localizationDispatch, showCountryList } =
    useLocalization();

  return (
    <ul
      className={`location-list-mobile ${
        showCountryList && `show-localization-mobile`
      }`}
    >
      {currencies.map((currency) => {
        const { country } = currency;
        return (
          <li
            key={country}
            className={`country country-mobile ${
              location === country && "highlight"
            } `}
            onClick={() => {
              localizationDispatch({ type: "SET_LOCATION", payload: country });
            }}
          >
            <p className="country__name country__name-mobile flex justify-center items-center">
              <span className="country__flag mr-4 flex justify-center items-center">
                <Flag country={country} />
              </span>
              {translate(country, language)}
            </p>
          </li>
        );
      })}
    </ul>
  );
};
