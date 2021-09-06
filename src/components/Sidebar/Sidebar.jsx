import "./sidebar-styles.css";
import { SidebarList } from "./SidebarList";
import {
  subjects,
  levelsOfDifficulty,
  productType,
} from "../../data/categoryList";
import { useECommerce, useLocalization } from "../../customHooks";
import { translate } from "../../functions";

export const Sidebar = () => {
  const { eCommerceState, eCommerceDispatch } = useECommerce();
  const { translatedStrings, language } = useLocalization();
  return (
    <aside className={`sidebar`}>
      <div className={`sidebar__heading`}>
        <h3 className="sidebar__name">{translatedStrings.filters}</h3>
        <h3
          className="sidebar__clear-all"
          onClick={() => {
            eCommerceDispatch({ type: "CLEAR_ALL_FILTERS" });
          }}
        >
          {translatedStrings.clearAll}
        </h3>
      </div>
      <div className={`sidebar-filter-list`}>
        <div className={`filter-checkbox text-gray-600`}>
          <input
            type="checkbox"
            id={`inStock`}
            name={`inStock`}
            value={`inStock`}
            checked={!eCommerceState.inStockOnly}
            onChange={() => eCommerceDispatch({ type: "IN_STOCK" })}
          />
          <label htmlFor={`inStock`} className={`ml-2`}>
            {translate("Include Out of Stock", language)}
          </label>
        </div>
        <div className={`filter-checkbox text-gray-600 mb-8`}>
          <input
            type="checkbox"
            id={`fast-delivery`}
            name={`fast-delivery`}
            value={`fast-delivery`}
            checked={eCommerceState.fastDeliveryOnly}
            onChange={() => eCommerceDispatch({ type: "FAST_DELIVERY" })}
          />
          <label htmlFor={`fast-delivery`} className={`ml-2`}>
            {translate("Fast Delivery", language)}
          </label>
        </div>
        <SidebarList list={productType} listName={"Product"} />
        <SidebarList list={subjects} listName={"Categories"} />
        <SidebarList list={levelsOfDifficulty} listName={"Level"} />
      </div>
    </aside>
  );
};
