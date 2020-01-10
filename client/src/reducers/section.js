import SHOP_DATA from '../pages/section/section-data';

const INITIAL_STATE = {
   collections: SHOP_DATA
};

const sectionReducer = (state = INITIAL_STATE, action ) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default sectionReducer;
