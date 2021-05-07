import "./sort-styles.css";
import { useECommerce, useLocalization } from "../../customHooks";
import { translate } from "../../functions";

export const SortMobile = ({ toggle, setToggle }) => {
  const { eCommerceState, eCommerceDispatch } = useECommerce();
  const { language } = useLocalization();
  const { sortBy } = eCommerceState;

  return (
    <section
      className={`sortby-mobile-list-container ${toggle && `show`}`}
      onClick={() => setToggle((currState) => !currState)}
    >
      <ul className={`sortby-mobile__list`}>
        <li
          className={`sortby__list__item
          ${sortBy === "RECOMMENDED" && "highlight"}
          `}
          onClick={() => {
            eCommerceDispatch({ type: "SORT", payload: "RECOMMENDED" });
          }}
        >
          {translate("Recommended", language)}
        </li>
        <li
          className={`sortby__list__item
          ${sortBy === "HIGHEST_RATED" && "highlight"}          
          `}
          onClick={() => {
            eCommerceDispatch({ type: "SORT", payload: "HIGHEST_RATED" });
          }}
        >
          {translate("Highest Rated", language)}
        </li>
        <li
          className={`sortby__list__item
          ${sortBy === "PRICE_HIGH_TO_LOW" && "highlight"}          
          `}
          onClick={() => {
            eCommerceDispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" });
          }}
        >
          {translate("Price: High to Low", language)}
        </li>
        <li
          className={`sortby__list__item
          ${sortBy === "PRICE_LOW_TO_HIGH" && "highlight"}          
          `}
          onClick={() => {
            eCommerceDispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" });
          }}
        >
          {translate("Price: Low to High", language)}
        </li>
      </ul>
    </section>
  );
};
