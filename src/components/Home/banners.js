import { v4 as uuidv4 } from "uuid";
import investing from "../../assets/img/investing.svg";
import books from "../../assets/img/books.svg";
import onlineCourses from "../../assets/img/onlineCourses.svg";
import trading from "../../assets/img/trading.svg";

export const banners = [
  {
    id: 0,
    img: investing,
    bannerHeading: "Investing Courses",
    offerDetails: "UpTo 50% off!",
    cta: "Shop Now"
  },
  {
    id: 1,
    img: trading,
    bannerHeading: "Trading Books",
    offerDetails: "UpTo 40% off!",
    cta: "Shop Now"
  },
  {
    id: 2,
    img: books,
    bannerHeading: "Beginner Books",
    offerDetails: "Lowest Prices!",
    cta: "Shop Now"
  },
  {
    id: 3,
    img: onlineCourses,
    bannerHeading: "Best Courses",
    offerDetails: "Curated by us!",
    cta: "Explore Now"
  }
];
