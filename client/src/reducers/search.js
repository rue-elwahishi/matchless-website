import { SEARCH_QUERY, FETCH_ITEM } from "../actions/types";

const initialState = {
  text: "",
  results: [],
  loading: false,
  result: []
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_QUERY:
      return {
        ...state,
        text: action.payload,
        loading: false
      };
    case FETCH_ITEM:
      return {
        ...state,
        results: action.payload
      };
    default:
      return state;
  }
};
export default search;
