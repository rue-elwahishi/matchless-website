import { SEARCH_QUERY, FETCH_ITEM } from "./types";
import axios from "axios";

export const searchQuery = text => dispatch => {
  dispatch({
    type: SEARCH_QUERY,
    payload: text
  });
};
export const fetchItems = text => dispatch => {
  axios
    .get(`http://localhost:5002/api/v1/items?title=${text}`)
    .then(response =>
      dispatch({
        type: FETCH_ITEM,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};
