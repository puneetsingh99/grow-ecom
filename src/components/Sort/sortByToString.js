export const sortByToString = (sortBy) => {
  switch (sortBy) {
    case `HIGHEST_RATED`:
      return `Highest Rated`;
    case `PRICE_LOW_TO_HIGH`:
      return `Price: Low to High`;
    case `PRICE_HIGH_TO_LOW`:
      return `Price: High to Low`;
    default:
      return `Recommended`;
  }
};
