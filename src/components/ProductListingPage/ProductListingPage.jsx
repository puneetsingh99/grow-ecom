import { useECommerce } from "../../customHooks";
import {
  ProductList,
  Loader,
  Sidebar,
  SidebarMobile,
  FilterBadgeList,
  Sort,
  Navbar,
} from "../";
import "./product-listing-page-styles.css";

export const ProductListingPage = () => {
  const {
    filteredData,
    loading,
    errorMessage,
    eCommerceState,
    user,

    fetchUserErrorMessage,
  } = useECommerce();

  return (
    <div>
      <Navbar />
      <main className={`product-listing-page`}>
        <aside className={`sidebar-container`}>
          <Sidebar />
        </aside>
        <section className={`main-section`}>
          <section className={`main-section__header`}>
            <FilterBadgeList />
            <Sort />
          </section>
          <div className={`product-list-container`}>
            {loading ? <Loader /> : <ProductList filteredData={filteredData} />}
          </div>
        </section>
        <footer className={`sidebar-mobile-conainer`}>
          <SidebarMobile />
        </footer>
      </main>
    </div>
  );
};
