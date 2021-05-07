export const getSortedData = (filteredData, sortBy) => {
  switch (sortBy) {
    case "RECOMMENDED":
      return [...filteredData.sort((a, b) => b["rating"] - a["rating"])];
    case "PRICE_LOW_TO_HIGH":
      // price  should not be sorted using mrp instead  by final price
      return [...filteredData.sort((a, b) => a["price"] - b["price"])];
    case "PRICE_HIGH_TO_LOW":
      return [...filteredData.sort((a, b) => b["price"] - a["price"])];
    case "HIGHEST_RATED":
      return [...filteredData.sort((a, b) => b["rating"] - a["rating"])];
    default:
      return filteredData;
  }
};
