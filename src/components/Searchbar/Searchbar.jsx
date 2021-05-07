import "./searchbar-styles.css";
import { SearchSvg } from "../../assets";
import { useECommerce, useLocalization } from "../../customHooks";

export const Searchbar = () => {
  const { eCommerceState, eCommerceDispatch } = useECommerce();
  const { translatedStrings } = useLocalization();

  return (
    <article className="searchbar">
      <span className="search-icon">
        <SearchSvg />
      </span>
      <input
        className="searchbar__input"
        type="text"
        value={eCommerceState.search}
        onChange={(e) =>
          eCommerceDispatch({ type: "SEARCH", payload: e.target.value })
        }
        placeholder={translatedStrings.searchPlaceholder}
      />
    </article>
  );
};
