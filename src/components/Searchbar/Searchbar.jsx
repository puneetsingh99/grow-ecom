import "./searchbar-styles.css";
import { useEffect } from "react";
import { SearchSvg } from "../../assets";
import { useLocalization } from "../../customHooks";
import { useState } from "react";
import { SearchResults } from "./SearchResults";
import { toast } from "react-toastify";
import { toastConfig } from "../../utils";
import { searchProducts } from "./searchProducts";

export const Searchbar = () => {
  const { translatedStrings } = useLocalization();
  const [searchKey, setSearchKey] = useState("");
  const [searchResults, setSearchResults] = useState({
    status: "idle",
    products: null,
    error: null,
  });

  const { status, products, error } = searchResults;

  useEffect(() => {
    if (searchKey) {
      (async function () {
        try {
          setSearchResults((prevSearch) => ({
            ...prevSearch,
            status: "searching",
          }));
          const response = await searchProducts(searchKey);
          if (response.matchingProducts) {
            setSearchResults((prevSearch) => {
              return {
                ...prevSearch,
                status: "succeeded",
                products: response.matchingProducts,
              };
            });
          }
        } catch (error) {
          toast.error(error.message, toastConfig);
          setSearchResults((prevSearch) => {
            return {
              ...prevSearch,
              status: "error",
              error: null,
            };
          });
        }
      })();
    }
  }, [searchKey]);

  return (
    <section className="searchbar-container">
      <article className="searchbar">
        <span className="search-icon">
          <SearchSvg />
        </span>
        <input
          className="searchbar__input"
          type="text"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          placeholder={translatedStrings.searchPlaceholder}
        />
      </article>
      {searchKey && searchResults.products && (
        <SearchResults results={products} status={status} />
      )}
    </section>
  );
};
