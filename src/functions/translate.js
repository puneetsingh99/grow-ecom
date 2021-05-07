import { languages } from "../data/localization";

export const translate = (listItemName, language) => {
  const languageMatch = languages.filter(
    (aLanguage) => aLanguage.language === language
  );

  switch (listItemName) {
    case "Fast Delivery":
      return languageMatch[0]["translatedStrings"]["delivery"];

    case "Include Out of Stock":
      return languageMatch[0]["translatedStrings"]["stock"];

    case "Product":
      return languageMatch[0]["translatedStrings"]["product"];

    case "Categories":
      return languageMatch[0]["translatedStrings"]["categories"];

    case "Level":
      return languageMatch[0]["translatedStrings"]["level"];

    case "Courses":
      return languageMatch[0]["translatedStrings"]["courses"];

    case "Books":
      return languageMatch[0]["translatedStrings"]["books"];

    case "Investing":
      return languageMatch[0]["translatedStrings"]["investing"];

    case "Trading":
      return languageMatch[0]["translatedStrings"]["trading"];

    case "Futures and Options":
      return languageMatch[0]["translatedStrings"]["fAndO"];

    case "Commodities":
      return languageMatch[0]["translatedStrings"]["commodities"];

    case "Beginner":
      return languageMatch[0]["translatedStrings"]["beginner"];

    case "Intermediate":
      return languageMatch[0]["translatedStrings"]["intermediate"];

    case "Advanced":
      return languageMatch[0]["translatedStrings"]["advanced"];

    case "Filters":
      return languageMatch[0]["translatedStrings"]["filters"];

    case "Clear All":
      return languageMatch[0]["translatedStrings"]["clearAll"];

    case "India":
      return languageMatch[0]["translatedStrings"]["india"];

    case "US":
      return languageMatch[0]["translatedStrings"]["us"];

    case "UK":
      return languageMatch[0]["translatedStrings"]["uk"];

    case "Brazil":
      return languageMatch[0]["translatedStrings"]["brazil"];

    case "Japan":
      return languageMatch[0]["translatedStrings"]["japan"];

    case "South Korea":
      return languageMatch[0]["translatedStrings"]["sk"];

    case "Sort By":
      return languageMatch[0]["translatedStrings"]["sortBy"];

    case "Recommended":
      return languageMatch[0]["translatedStrings"]["recommended"];

    case "Highest Rated":
      return languageMatch[0]["translatedStrings"]["highestRated"];

    case "Price: Low to High":
      return languageMatch[0]["translatedStrings"]["priceLowToHigh"];

    case "Price: High to Low":
      return languageMatch[0]["translatedStrings"]["priceHighToLow"];

    case "Apply":
      return languageMatch[0]["translatedStrings"]["apply"];

    case "Sort":
      return languageMatch[0]["translatedStrings"]["sort"];

    case "Language":
      return languageMatch[0]["translatedStrings"]["languageWord"];

    case "Location":
      return languageMatch[0]["translatedStrings"]["location"];

    case "Add to Cart":
      return languageMatch[0]["translatedStrings"]["addToCart"];

    case "Move to Cart":
      return languageMatch[0]["translatedStrings"]["moveToCart"];

    case "Wishlist":
      return languageMatch[0]["translatedStrings"]["wishlist"];

    case "Cart":
      return languageMatch[0]["translatedStrings"]["cart"];

    case "item":
      return languageMatch[0]["translatedStrings"]["item"];

    case "items":
      return languageMatch[0]["translatedStrings"]["items"];

    case "Adding... 😃":
      return languageMatch[0]["translatedStrings"]["adding"];

    case "Removing... 😊":
      return languageMatch[0]["translatedStrings"]["removing"];

    case "Moving... 😃":
      return languageMatch[0]["translatedStrings"]["moving"];

    case "Added to Cart! 🥳":
      return languageMatch[0]["translatedStrings"]["addedToCart"];

    case "Moved to Cart! 🥳":
      return languageMatch[0]["translatedStrings"]["movedToCart"];

    case "Removed from Cart 👍":
      return languageMatch[0]["translatedStrings"]["removedFromCart"];

    case "Product already present in Cart 😊":
      return languageMatch[0]["translatedStrings"]["alreadyInCart"];

    case "Added to Wishlist! 🥳":
      return languageMatch[0]["translatedStrings"]["addedToWishlist"];

    case "Moved to Wishlist! 🥳":
      return languageMatch[0]["translatedStrings"]["movedToWishlist"];

    case "Removed from Wishlist 👍":
      return languageMatch[0]["translatedStrings"]["removedFromWishlist"];

    case "Product already present in Wishlist 😊":
      return languageMatch[0]["translatedStrings"]["alreadyInWishlist"];

    default:
      break;
  }
};

// Adding...
// Removing...
// Moving...
// DONE!

// Added to Cart!
// Moved to Cart!
// Removed from Cart
// Product already present in Cart

// Added to Wishlist!
// Moved to Wishlist!
// Removed from Wishlist
// Product already present in Wishlist
