import "./navbar-styles.css";
import { Link } from "react-router-dom";

import {
  LogoSvg,
  AccountSvg,
  HeartSvg,
  CartSvg,
  LanguageSvg,
  SearchSvg,
  HamburgerSvg,
} from "../../assets";

import {
  Searchbar,
  Flag,
  LocationList,
  LanguageList,
  SearchbarMobile,
  HamburgerMenu,
  AccountDropdown,
} from "../";
import { useLocalization, useHamburger, useECommerce } from "../../customHooks";

import { useState } from "react";
import { useWishlist } from "../../contexts/WishlistContext/WishlistContext";
import { useCart } from "../../contexts/CartContext/CartContext";
import { useAuth } from "../../contexts";

export const Navbar = () => {
  const { location, localizationDispatch, translatedStrings, showCountryList } =
    useLocalization();
  const [showSearchMobile, setShowSearchMobile] = useState(false);
  const { showHamburgerMenu, setShowHamburgerMenu } = useHamburger();
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const { isUserLoggedIn } = useAuth();

  const { cartItemIds, wishlistItemIds } = useECommerce();

  const { wishlistState } = useWishlist();
  const { cartState } = useCart();

  let wishlistIcon, cartIcon;

  if (wishlistState.status === "succeeded") {
    if (wishlistState.wishlist.length > 0) {
      wishlistIcon = (
        <div className="badge-qty"> {wishlistState.wishlist.length} </div>
      );
    }
  }

  if (cartState.status === "succeeded") {
    if (cartState.cart.length > 0) {
      cartIcon = <div className="badge-qty"> {cartState.cart.length} </div>;
    }
  }

  return (
    <nav className="nav">
      <div className="nav__branding">
        <div className="nav__links hamburger-menu">
          <span onClick={() => setShowHamburgerMenu((currState) => !currState)}>
            <HamburgerSvg />
          </span>
          <div onClick={() => {}}>
            <HamburgerMenu
              toggle={showHamburgerMenu}
              setToggle={setShowHamburgerMenu}
            />
          </div>
        </div>
        <div className="nav__branding__logo">
          <Link to="/" className={`text-link`}>
            <LogoSvg />
          </Link>
        </div>

        <div className="nav__branding__name">
          <Link to="/" className={`text-link`}>
            <h1>Grow</h1>
          </Link>
        </div>
      </div>

      <div className="search-products">
        <Searchbar />
      </div>

      <div className={`search-products-mobile ${showSearchMobile && "show"}`}>
        <SearchbarMobile
          setShowSearchMobile={setShowSearchMobile}
          showSearchMobile={showSearchMobile}
        />
      </div>

      <div className="localization">
        <div className="select-country">
          <span
            className="flag"
            onClick={() => localizationDispatch({ type: "TOGGLE_COUNTRYLIST" })}
          >
            <span className="location-name">{translatedStrings.location}</span>
            <Flag country={location} />
          </span>

          <LocationList />
        </div>

        <div className="select-language">
          <span
            className="language-icon"
            onClick={() =>
              localizationDispatch({ type: "TOGGLE_LANGUAGELIST" })
            }
          >
            <LanguageSvg />
          </span>
          <LanguageList />
        </div>
      </div>

      <div className="nav__links">
        <span
          className="search-icon--mobile"
          onClick={() => setShowSearchMobile(!showSearchMobile)}
        >
          <SearchSvg />
        </span>
        <div className={`account-icon`}>
          <div
            className={`account`}
            onClick={() => setShowAccountMenu((currFlag) => !currFlag)}
          >
            <AccountSvg />
          </div>
          <div className="account-menu">
            <AccountDropdown showAccountMenu={showAccountMenu} />
          </div>
        </div>

        <Link to="/wishlist" className={`text-link`}>
          <div className={`badge-icon-ecom`}>
            <HeartSvg />
            {wishlistIcon}
          </div>
        </Link>

        <Link to="/cart" className={`text-link`}>
          <div className={`badge-icon-ecom`}>
            <CartSvg />
            {cartIcon}
          </div>
        </Link>
      </div>
    </nav>
  );
};
