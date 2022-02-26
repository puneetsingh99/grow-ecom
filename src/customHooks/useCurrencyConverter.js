import axios from "axios";
import { useEffect, useReducer } from "react";
import { useLocalization } from "./";
import { currencyRateReducer } from "../functions";

export const useCurrencyConverter = () => {
  const [{ allCurrencyRates, currencySymbol, selectedCurrencyRate }, dispatch] =
    useReducer(currencyRateReducer, {
      allCurrencyRates: [],
      currencySymbol: "",
      selectedCurrencyRate: 1,
    });
  const { location } = useLocalization();

  const url = `https://api.exchangerate.host/latest?base=INR`;

  const findCurrencyIsoCodeAndSymbol = (countryName) => {
    switch (countryName) {
      case "India":
        return { isoCode: "INR", symbol: "₹" };
      case "US":
        return { isoCode: "USD", symbol: "$" };
      case "UK":
        return { isoCode: "GBP", symbol: "£" };
      case "Brazil":
        return { isoCode: "BRL", symbol: "R$" };
      case "Japan":
        return { isoCode: "JPY", symbol: "¥" };
      case "South Korea":
        return { isoCode: "KRW", symbol: "₩" };
      default:
        break;
    }
  };

  const getExchangeRates = async () => {
    try {
      const response = await axios.get(
        `https://api.exchangerate.host/latest?base=INR`
      );

      const { isoCode, symbol } = findCurrencyIsoCodeAndSymbol(location);
      const rate = response.data.rates[isoCode];

      const newPayload = {
        allCurrencyRates: response.data.rates,
        currencySymbol: symbol,
        selectedCurrencyRate: rate,
      };

      dispatch({ type: "SET_CURRENCY", payload: newPayload });
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => getExchangeRates(), []);

  return {
    allCurrencyRates,
    currencySymbol,
    selectedCurrencyRate,
  };
};
