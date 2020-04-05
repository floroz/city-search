import {
  FETCH_CITIES_FAIL,
  FETCH_CITIES_START,
  FETCH_CITIES_SUCCESS,
  CLEAR,
} from "./actionTypes";

const initialState = {
  cities: null,
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CITIES_START:
      return {
        cities: null,
        loading: true,
        error: null,
      };
    case FETCH_CITIES_SUCCESS:
      return {
        cities: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_CITIES_FAIL:
      return {
        cities: null,
        loading: false,
        error: action.payload,
      };
    case CLEAR:
      return initialState;
    default:
      return state;
  }
}
