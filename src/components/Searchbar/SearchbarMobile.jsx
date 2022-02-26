import "./searchbar-styles.css";
import { SearchSvg, BackArrowSvg } from "../../assets";
import { useECommerce, useLocalization } from "../../customHooks";
import { useRef } from "react";

export const SearchbarMobile = ({ setShowSearchMobile, showSearchMobile }) => {
  const { eCommerceState, eCommerceDispatch } = useECommerce();
  const { translatedStrings } = useLocalization();

  const inputRef = useRef();

  showSearchMobile && inputRef.current.focus();

  return (
    <article className={`searchbar searchbar-mobile`}>
      <span
        className="search-icon backarrow-icon"
        onClick={() => {
          setShowSearchMobile((currState) => !currState);
          eCommerceDispatch({ type: "SEARCH", payload: "" });
        }}
      >
        <BackArrowSvg />
      </span>
      <input
        className="searchbar__input-mobile"
        type="text"
        placeholder={translatedStrings.searchPlaceholder}
        value={eCommerceState.search}
        ref={inputRef}
        onChange={(e) =>
          eCommerceDispatch({ type: "SEARCH", payload: e.target.value })
        }
      />
      <span className="search-icon-mobile">
        <SearchSvg />
      </span>
    </article>
  );
};
