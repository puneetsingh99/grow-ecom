import { SortSvg, FilterSvg } from "../../assets";
import { SidebarMobileList } from "./SidebarMobileList";
import { SortMobile } from "../";
import {
  subjects,
  levelsOfDifficulty,
  productType
} from "../../data/categoryList";
import "./sidebar-styles.css";
import { useState } from "react";
import { useHamburger, useECommerce, useLocalization } from "../../customHooks";
import { translate } from "../../functions";

export const SidebarMobile = () => {
  const [showFilterList, setShowFilterList] = useState(false);
  const [showSortbyList, setShowSortbyList] = useState(false);
  const { showHamburgerMenu } = useHamburger();
  console.log({ showHamburgerMenu });
  const { eCommerceState, eCommerceDispatch } = useECommerce();
  const { language } = useLocalization();

  return (
    <footer
      className={`sidebar-mobile`}
      style={{ zIndex: showHamburgerMenu ? "40" : "60" }}
    >
      <div className={`filterby-mobile`}>
        <div
          className={`sidebar-mobile-filter-list ${showFilterList && `show`}`}
        >
          <h3 className={`filter-mobile-heading`}>
            {translate("Filters", language)}
          </h3>
          <div className={`filter-checkbox`}>
            <input
              type="checkbox"
              id={`outofstock`}
              name={`outofstock`}
              value={`outofstock`}
              checked={!eCommerceState.inStockOnly}
              onChange={() => eCommerceDispatch({ type: "IN_STOCK" })}
            />
            <label htmlFor={`outofstock`} className={`ml-2`}>
              {translate("Include Out of Stock", language)}
            </label>
          </div>
          <div className={`filter-checkbox`}>
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

          <SidebarMobileList list={productType} listName={"Product"} />
          <SidebarMobileList list={subjects} listName={"Categories"} />
          <SidebarMobileList list={levelsOfDifficulty} listName={"Level"} />
          <div className={`filter-mobile-actions`}>
            <p
              onClick={() => setShowFilterList((currState) => !currState)}
              className={`cursor-pointer`}
            >
              {translate("Apply", language)}
            </p>
          </div>
        </div>
        <div
          className={`filterby-mobile cursor-pointer`}
          onClick={() => setShowFilterList((currState) => !currState)}
        >
          <FilterSvg />
          <p>{translate("Filters", language)}</p>
        </div>
      </div>
      <div className={`sortby-mobile cursor-pointer`}>
        <SortMobile toggle={showSortbyList} setToggle={setShowSortbyList} />

        <div
          className={`sortby-mobile`}
          onClick={() => setShowSortbyList((currState) => !currState)}
        >
          <SortSvg />
          <p>{translate("Sort", language)}</p>
        </div>
      </div>
    </footer>
  );
};
