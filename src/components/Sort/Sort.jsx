import "./sort-styles.css";
import { DownwardArrowSvg } from "../../assets";
import { useECommerce, useLocalization } from "../../customHooks";
import { sortByToString } from "./sortByToString";
import { translate } from "../../functions";

export const Sort = () => {
  const { eCommerceState, eCommerceDispatch } = useECommerce();
  const { language } = useLocalization();
  const { sortBy } = eCommerceState;

  return (
    <article className={`sortby`}>
      <p className={`sortby__selected`}>
        {`${translate("Sort By", language)} : `}
        <span className={`sortby__label`}>
          {" "}
          {translate(sortByToString(sortBy), language)}{" "}
        </span>
        <span className={`downward-arrow-icon`}>
          <DownwardArrowSvg />
        </span>
      </p>
      <ul className={`sortby__list `}>
        <li
          className={`sortby__list__item ${
            sortBy === "RECOMMENDED" && "highlight"
          }`}
          onClick={() => {
            eCommerceDispatch({ type: "SORT", payload: "RECOMMENDED" });
          }}
        >
          {translate("Recommended", language)}
        </li>
        <li
          className={`sortby__list__item ${
            sortBy === "HIGHEST_RATED" && "highlight"
          }`}
          onClick={() => {
            eCommerceDispatch({ type: "SORT", payload: "HIGHEST_RATED" });
          }}
        >
          {translate("Highest Rated", language)}
        </li>
        <li
          className={`sortby__list__item ${
            sortBy === "PRICE_HIGH_TO_LOW" && "highlight"
          }`}
          onClick={() => {
            eCommerceDispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" });
          }}
        >
          {translate("Price: High to Low", language)}
        </li>
        <li
          className={`sortby__list__item ${
            sortBy === "PRICE_LOW_TO_HIGH" && "highlight"
          }
          `}
          onClick={() => {
            eCommerceDispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" });
          }}
        >
          {translate("Price: Low to High", language)}
        </li>
      </ul>
    </article>
  );
};
