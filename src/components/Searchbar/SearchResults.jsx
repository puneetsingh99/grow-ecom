import React from "react";
import "./searchbar-styles.css";
import { SearchResultProductCard } from "./SearchResultProductCard";
import { Loader } from "..";

export const SearchResults = ({ results, status }) => {
  return (
    <article className="search-results">
      {status === "searching" && <Loader />}
      {status === "succeeded" && results.length === 0 && (
        <div className={`full-width-container`}>
          <p>No matching products found</p>
        </div>
      )}
      <ul>
        {results.map((product) => (
          <SearchResultProductCard product={product} />
        ))}
      </ul>
    </article>
  );
};
