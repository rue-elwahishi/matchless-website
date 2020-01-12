import axios from "axios";
import {LOAD_SECTIONS_DATA, LOAD_SECTIONS_DATA_FAIL} from "./types";
import {setAlert} from "./alert";


// Load all of the sections to be displayed in the directory
export const loadSectionsData = () => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    try {
        const res = await axios.get(
            "http://localhost:5002/api/v1/categories/",
            config
        );

        // transforming the incoming data into an object
        let categories = {};
        res.data.data.forEach(category => {
            categories[category["routeName"]] = category;
        });

        console.log(categories);

        dispatch({
            type: LOAD_SECTIONS_DATA,
            payload: categories
        });

    } catch (e) {
        dispatch(setAlert(e.response.data.msg, "danger"));
        dispatch({
            type: LOAD_SECTIONS_DATA_FAIL
        });
    }
};
