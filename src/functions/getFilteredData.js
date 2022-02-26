import { searchHandler } from "./searchHandler";

export const getFilteredData = (
  data,
  levels,
  categories,
  productType,
  fastDeliveryOnly,
  inStockOnly,
  search
) => {
  const filteredBySearchString =
    search === "" ? data : data.filter((item) => searchHandler(item, search));

  const filteredByProductType =
    productType.length === 0
      ? filteredBySearchString
      : filteredBySearchString.filter((item) =>
          productType.includes(item.productType)
        );

  const filteredByDeliveryType = fastDeliveryOnly
    ? filteredByProductType.filter((item) => item.fastDelivery)
    : filteredByProductType;

  const filteredByStockAvailability = inStockOnly
    ? filteredByDeliveryType.filter((item) => item.inStock)
    : filteredByDeliveryType;

  const filteredByLevel =
    levels.length === 0
      ? filteredByStockAvailability
      : filteredByStockAvailability.filter((item) =>
          levels.includes(item.level)
        );

  const filteredByCategory =
    categories.length === 0
      ? filteredByLevel
      : filteredByLevel.filter((item) => categories.includes(item.category));

  return filteredByCategory;
};

// ["course", "investing", "fastdelivery"]
// Note : product of type course will not have an option of delivery type:

// possible  types of filters;
// productType
// level
// fastDelivery
// instock
// categories.
