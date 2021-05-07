import "./sidebar-styles.css";
import { useCheckBox, useLocalization } from "../../customHooks";
import { translate } from "../../functions";
import { v4 as uuidv4 } from "uuid";

export const SidebarList = ({ listName, list }) => {
  const { filterCheckBoxHandler, toggleCheckBox } = useCheckBox();
  const { language } = useLocalization();

  return (
    <aside className={`sidebar-list-section`}>
      <h3 className={`sidebar-list-name`}>{translate(listName, language)}</h3>
      <ul className={`sidebar-list`}>
        {list.map((listItem) => {
          return (
            <li className={`sidebar-list-item`} key={uuidv4()}>
              <input
                type="checkbox"
                id={listItem.name}
                name={listItem.name}
                checked={filterCheckBoxHandler(listName, listItem.name)}
                value={listItem.name}
                onChange={() => {
                  toggleCheckBox(listName, listItem.name);
                }}
              />
              <label htmlFor={listItem.name} className={`ml-2`}>
                {/* {listItem.name} */}
                {translate(listItem.name, language)}
              </label>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
