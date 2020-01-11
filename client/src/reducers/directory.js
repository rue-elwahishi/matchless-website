import {LOAD_SECTIONS} from "../actions/types";

const INITIAL_STATE = {
  sections: []
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_SECTIONS:
      return {
        ...state,
        sections: action.payload
      };
    default:
      return state;
  }
};

export default directoryReducer;
