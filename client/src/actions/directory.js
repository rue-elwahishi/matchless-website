import axios from "axios";
import {LOAD_SECTIONS, LOAD_SECTIONS_FAIL} from "./types";
import {setAlert} from "./alert";
import {loadUser} from "./auth";

// Load all of the sections to be displayed in the directory
export const loadSections = () => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    try {
        const res = await axios.get(
            "http://localhost:5002/api/v1/sections/",
            config
        );
        console.log(res.data.data);
        dispatch({
            type: LOAD_SECTIONS,
            payload: res.data.data
        });

    } catch (e) {
        dispatch(setAlert(e.response.data.msg, "danger"));
        dispatch({
            type: LOAD_SECTIONS_FAIL
        });
    }
};
