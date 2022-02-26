import "./filter-badge-styles.css";
import { CrossSvg } from "../../assets";
import { useCheckBox, useLocalization } from "../../customHooks";
import { translate } from "../../functions";

export const FilterBadge = ({ filtername, listName }) => {
  const { toggleCheckBox } = useCheckBox();
  const { language } = useLocalization();

  return (
    <div className={`filter`}>
      <p className={`filter__name`}>{translate(filtername, language)}</p>
      <span
        className={`filter__remove`}
        onClick={() => {
          toggleCheckBox(listName, filtername);
        }}
      >
        <CrossSvg />
      </span>
    </div>
  );
};
