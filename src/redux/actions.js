import {
  FETCH_CITIES_START,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_FAIL,
  CLEAR,
} from "./actionTypes";

export const fetchCities = (input) => {
  const url = `https://jsonmock.hackerrank.com/api/cities/?city=${input}`;

  return async (dispatch) => {
    dispatch({
      type: FETCH_CITIES_START,
    });

    try {
      const res = await fetch(url);
      const { data: cities } = await res.json();
      dispatch({
        type: FETCH_CITIES_SUCCESS,
        payload: cities,
      });
    } catch (error) {
      dispatch({ type: FETCH_CITIES_FAIL, payload: error.message });
    }
  };
};

export const clearCities = () => {
  return {
    type: CLEAR,
  };
};
