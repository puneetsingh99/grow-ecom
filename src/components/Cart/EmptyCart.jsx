import emptyCart from "../../assets/img/emptyCart.svg";
import { Link } from "react-router-dom";

export const EmptyCart = () => {
  return (
    <main className={`empty-page`}>
      <div className={`empty-indicating-img`}>
        <img src={emptyCart} alt={`cart is empty`} />
        <h1 className={`empty-page-title`}>{`Your Cart is empty`}</h1>

        <Link className={`text-link`} to={`/products`}>
          <h2 className={`empty-page-cta`}>{`Add items`}</h2>
        </Link>
      </div>
    </main>
  );
};
