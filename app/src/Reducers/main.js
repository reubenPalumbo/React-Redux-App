export const initialState = {
  currency: [
    {
      rate: 1,
      name: "Dollar",
      label: "USD",
      symbol: "$",
    },
    {
      rate: 0.85,
      name: "Euro",
      label: "EUR",
      symbol: "€",
    },
    {
      rate: 78.07,
      name: "Ruble",
      label: "RUB",
      symbol: "RUB",
    },
  ],
  rateMultiply: 1,
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
