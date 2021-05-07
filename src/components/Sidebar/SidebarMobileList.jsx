import { useState } from "react";
import { DownwardArrowSvg } from "../../assets";
import { useCheckBox, useLocalization } from "../../customHooks";
import { translate } from "../../functions";
import { v4 as uuidv4 } from "uuid";

import "./sidebar-styles.css";

export const SidebarMobileList = ({ listName, list }) => {
  const [showSidebarList, setShowSidebarList] = useState();
  const { filterCheckBoxHandler, toggleCheckBox } = useCheckBox();
  const { language } = useLocalization();

  return (
    <aside className={`sidebar-mobile-list-section`}>
      <h3
        className={`sidebar-mobile-list-name`}
        onClick={() => setShowSidebarList((currVal) => !currVal)}
      >
        {translate(listName, language)}
        <span className={`downward-arrow-icon-mobile`}>
          <DownwardArrowSvg />
        </span>
      </h3>
      <ul
        className={`sidebar-mobile-list ${
          showSidebarList && `show-sidebar-mobile-list`
        }`}
      >
        {list.map((listItem) => {
          return (
            <li className={`sidebar-mobile-list-item`} key={uuidv4()}>
              <input
                type="checkbox"
                id={listItem.name}
                name={listItem.name}
                value={listItem.name}
                checked={filterCheckBoxHandler(listName, listItem.name)}
                onChange={() => {
                  toggleCheckBox(listName, listItem.name);
                }}
              />
              <label htmlFor={listItem.name} className={`ml-2`}>
                {translate(listItem.name, language)}
              </label>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
