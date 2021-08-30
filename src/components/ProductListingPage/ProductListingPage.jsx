import {
  ProductList,
  Sidebar,
  SidebarMobile,
  FilterBadgeList,
  Sort,
  Navbar,
} from "../";
import "./product-listing-page-styles.css";

export const ProductListingPage = () => {
  return (
    <>
      <Navbar />
      <main className={`product-listing-page`}>
        <aside className={`sidebar-container`}>
          <Sidebar />
        </aside>
        <section className={`main-section`}>
          <article className={`main-section__header`}>
            <FilterBadgeList />
            <Sort />
          </article>
          <section className={`product-list-container`}>
            <ProductList />
          </section>
        </section>
        <footer className={`sidebar-mobile-conainer`}>
          <SidebarMobile />
        </footer>
      </main>
    </>
  );
};
