import axios from "axios";

export const CHANGE_RATE = "CHANGE_RATE";

export const FETCH_RATES_START = "FETCH_RATES_START";
export const FETCH_RATES_SUCCESS = "FETCH_RATES_SUCCESS";
export const FETCH_RATES_FAILURE = "FETCH_RATES_FAILURE";

const url =
  "https://v6.exchangerate-api.com/v6/5920198c2b3173e8db652502/latest/USD";

export const newRate = (newRateNum) => {
  return { type: CHANGE_RATE, payload: newRateNum };
};

export const fetchRates = () => (dispatch) => {
  console.log("fetchRates");
  dispatch({ type: FETCH_RATES_START });
  axios
    .get(url)
    .then((res) => {
      dispatch({
        type: FETCH_RATES_SUCCESS,
        payload: res.data.conversion_rates,
      });
    })
    .catch((err) => console.log(err));
};
