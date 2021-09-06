export const localizationReducer = (state, action) => {
  switch (action.type) {
    case "SET_LANGUAGE":
      return {
        ...state,
        language: action.payload,
        showLanguageList: !state.showLanguageList,
        showCountryList: false,
      };

    case "SET_LOCATION":
      return {
        ...state,
        location: action.payload,
        showCountryList: !state.showCountryList,
        showLanguageList: false,
      };

    case "TOGGLE_COUNTRYLIST":
      return {
        ...state,
        showCountryList: !state.showCountryList,
        showLanguageList: false,
      };

    case "TOGGLE_LANGUAGELIST":
      return {
        ...state,
        showLanguageList: !state.showLanguageList,
        showCountryList: false,
      };

    default:
      return state;
  }
};
