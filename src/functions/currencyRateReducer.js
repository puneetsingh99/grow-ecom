export const currencyRateReducer = (state, action) => {
  switch (action.type) {
    case "SET_CURRENCY":
      return {
        ...state,
        allCurrencyRates: { ...action.payload.allCurrencyRates },
        currencySymbol: action.payload.currencySymbol,
        selectedCurrencyRate: action.payload.selectedCurrencyRate
      };
    default:
      break;
  }
};
