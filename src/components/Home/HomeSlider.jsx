import "./home-styles.css";
import { Banner } from "../";
import { banners } from "./banners";
import { useEffect, useState } from "react";
import { PreviousSvg, NextSvg } from "../../assets";
import { Link } from "react-router-dom";

export const HomeSlider = () => {
  const [index, setIndex] = useState(0);
  const [banner, setBanner] = useState(banners);

  useEffect(() => {
    const lastIndex = banners.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, banner]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className={`slider-container`}>
      <ul className={`slider`}>
        <button
          className={`slider-nav-button previous-slide flex justify-center align-center`}
          onClick={() => setIndex((currIndex) => currIndex - 1)}
        >
          <PreviousSvg />
        </button>
        {banner.map((banner, bannerIndex) => {
          return (
            <li key={bannerIndex}>
              <Link to={`/products`}>
                <Banner {...banner} index={index} />
              </Link>
            </li>
          );
        })}
        <button
          className={`slider-nav-button next-slide flex justify-center align-center`}
          onClick={() => setIndex((currIndex) => currIndex + 1)}
        >
          <NextSvg />
        </button>
        <div className={`dots`}>
          {banners.map((banner, bannerIndex) => {
            return (
              <p
                key={banner.id}
                className={`dot ${bannerIndex === index && `highlight-dot`}`}
                onClick={() => setIndex(() => bannerIndex)}
              ></p>
            );
          })}
        </div>
      </ul>
    </section>
  );
};
