import { FilterBadge } from "./FilterBadge";
import { useECommerce, useLocalization } from "../../customHooks";
import { CrossSvg } from "../../assets";
import { translate } from "../../functions";

export const FilterBadgeList = () => {
  const { language } = useLocalization();

  const {
    filteredData,
    loading,
    errorMessage,
    eCommerceState,
    eCommerceDispatch
  } = useECommerce();
  const {
    levels,
    categories,
    productType,
    fastDeliveryOnly,
    inStockOnly
  } = eCommerceState;

  return (
    <ul className={`filter-badge-list`}>
      {!inStockOnly && (
        <div className={`filter mr-4`}>
          <p className={`filter__name`}>
            {translate("Include Out of Stock", language)}{" "}
          </p>
          <span
            className={`filter__remove`}
            onClick={() => {
              eCommerceDispatch({ type: "IN_STOCK" });
            }}
          >
            <CrossSvg />
          </span>
        </div>
      )}

      {fastDeliveryOnly && (
        <div className={`filter mr-4`}>
          <p className={`filter__name`}>
            {translate("Fast Delivery", language)}{" "}
          </p>
          <span
            className={`filter__remove`}
            onClick={() => {
              eCommerceDispatch({ type: "FAST_DELIVERY" });
            }}
          >
            <CrossSvg />
          </span>
        </div>
      )}

      {levels.map((badge) => {
        return (
          <li key={badge}>
            <FilterBadge filtername={badge} listName={"Level"} />
          </li>
        );
      })}
      {categories.map((badge) => {
        return (
          <li key={badge}>
            <FilterBadge filtername={badge} listName={"Categories"} />
          </li>
        );
      })}
      {productType.map((badge) => {
        return (
          <li key={badge}>
            <FilterBadge filtername={badge} listName={"Product"} />
          </li>
        );
      })}
    </ul>
  );
};
