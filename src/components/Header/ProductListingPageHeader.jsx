import "./header-styles.css";
import { Sort, Filter } from "../";

export const ProductListingPageHeader = () => {
  return (
    <header className={`product-listing-page`}>
      <h1>Filters</h1>
      <h3>CLEAR ALL</h3>
      {/*  this component is not being used anywhere  remove it  while refactoring*/}
    </header>
  );
};
