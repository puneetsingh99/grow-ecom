import { useECommerce } from "./useECommerce";

export const useCheckBox = () => {
  const { eCommerceState, eCommerceDispatch } = useECommerce();

  const filterCheckBoxHandler = (listName, listItemName) => {
    switch (listName) {
      case "Product":
        return eCommerceState.productType.includes(listItemName);
      case "Categories":
        return eCommerceState.categories.includes(listItemName);
      case "Level":
        return eCommerceState.levels.includes(listItemName);
      default:
        return false;
    }
  };

  const nameToObjectProperty = (listName) => {
    switch (listName) {
      case "Product":
        return "PRODUCT_TYPE";
      case "Categories":
        return "CATEGORIES";
      case "Level":
        return "LEVEL";
      default:
        break;
    }
  };

  const nameToObjectPropertyRemove = (listName) => {
    switch (listName) {
      case "Product":
        return "REMOVE_PRODUCT_TYPE";
      case "Categories":
        return "REMOVE_CATEGORIES";
      case "Level":
        return "REMOVE_LEVEL";
      default:
        break;
    }
  };

  const toggleCheckBox = (listName, listItemName) => {
    const check = (listName, listItemName) => {
      eCommerceDispatch({
        type: nameToObjectProperty(listName),
        payload: listItemName
      });
    };

    const unCheck = (listName, listItemName) => {
      eCommerceDispatch({
        type: nameToObjectPropertyRemove(listName),
        payload: listItemName
      });
    };

    switch (listName) {
      case "Product":
        return eCommerceState.productType.includes(listItemName)
          ? unCheck(listName, listItemName)
          : check(listName, listItemName);
      case "Categories":
        return eCommerceState.categories.includes(listItemName)
          ? unCheck(listName, listItemName)
          : check(listName, listItemName);
      case "Level":
        return eCommerceState.levels.includes(listItemName)
          ? unCheck(listName, listItemName)
          : check(listName, listItemName);
      default:
        break;
    }
  };

  return { filterCheckBoxHandler, toggleCheckBox };
};
