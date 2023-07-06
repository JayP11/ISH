import {
  GET_LOCATION_BEGIN,
  GET_LOCATION_SUCCESS,
  GET_LOCATION_ERROR,
  GET_PLACE_BEGIN,
  GET_PLACE_ERROR,
  GET_PLACE_SUCCESS,
} from "../action";

const location_reducer = (state, action) => {
  if (action.type === GET_LOCATION_BEGIN) {
    return { ...state, is_loading_home: true };
  }
  if (action.type === GET_LOCATION_SUCCESS) {
    return {
      ...state,
      is_loading_home: false,
      location_list: action.payload,
    };
  }
  if (action.type === GET_LOCATION_ERROR) {
    return { ...state, is_loading_home: false };
  }

  // ---------------------------------------------

  if (action.type === GET_PLACE_BEGIN) {
    return { ...state, is_place_home: true };
  }
  if (action.type === GET_PLACE_SUCCESS) {
    return {
      ...state,
      is_place_home: false,
      places_list: action.payload,
    };
  }
  if (action.type === GET_PLACE_ERROR) {
    return { ...state, is_place_home: false };
  }

  return state;
};

export default location_reducer;
