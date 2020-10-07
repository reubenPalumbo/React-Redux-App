export const CHANGE_RATE = "CHANGE_RATE";

export const newRate = (newRateNum) => {
  return { type: CHANGE_RATE, payload: newRateNum };
};
