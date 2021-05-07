export const Banner = ({
  img,
  bannerHeading,
  offerDetails,
  cta,
  index,
  id
}) => {
  return (
    <li>
      <article className={`banner ${index === id && "active-banner"}`}>
        <div className={`banner-img-container`}>
          <img src={img} alt={`banner-img`} className={`banner-img`} />
        </div>
        <div className={`banner-text`}>
          <h1 className={`banner-heading small-text`}>{bannerHeading}</h1>
          <h1 className={`medium-text`}>{offerDetails}</h1>
          <p className={`shop-now`}>{cta}</p>
        </div>
      </article>
    </li>
  );
};
