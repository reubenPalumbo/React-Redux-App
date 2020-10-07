export const initialState = {
  base: {
    rate: 1,
    name: "USD",
  },
  currency: {},
  rateMultiply: 1,
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_RATE":
      return { ...state, rateMultiply: action.payload };
    case "FETCH_RATES_START":
      return state;
    case "FETCH_RATES_SUCCESS":
      return { ...state, currency: action.payload };
    default:
      return state;
  }
};
