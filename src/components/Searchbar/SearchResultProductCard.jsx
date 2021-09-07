import { Link } from "react-router-dom";
import { goToProductRoute } from "../../routes";

export const SearchResultProductCard = ({ product }) => {
  const { title, author, image, category } = product;
  console.log(product);
  return (
    <Link className={`text-link`} to={goToProductRoute(product._id)}>
      <article className={`search-result-card`}>
        <div className={`search-result-img`}>
          <img src={image} alt={title} />
        </div>
        <div>
          <h2 className={`search-result__title mb-1`} title={title}>
            {title}
          </h2>
          <p className={`text-gray-600 text-sm mb-1`}>{`By ${author}`}</p>
          <p className={`text-sm`}>{category}</p>
        </div>
      </article>
    </Link>
  );
};
