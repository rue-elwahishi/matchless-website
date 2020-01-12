import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_CURRENT_USER,
  USER_SIGNIN_WITH_GOOGLE,
  SIGNOUT_WITH_GOOGLE
} from "./types";
import axios from "axios";
import { setAlert } from "./alert";
import setAuthToken from "../utils/setAuthToken";

import { auth } from '../utils/firebase'


//Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("http://localhost:5002/api/v1/auth/me");
    console.log(res);

    dispatch({
      type: USER_LOADED,
      payload: res.data.data
    });
    dispatch({
      type: SET_CURRENT_USER,
      payload: res.data.data
    });
  } catch (e) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Register User
export const register = ({ name, email, password }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post(
      "http://localhost:5002/api/v1/auth/register",
      body,
      config
    );
    console.log(res);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (e) {
    dispatch(setAlert(e.response.data.msg, "danger"));
    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// Login User
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(
      "http://localhost:5002/api/v1/auth/login",
      body,
      config
    );
    console.log(res);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (e) {
    console.log(e);
    dispatch(setAlert(e.response.data.msg, "danger"));
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Logout & Clear
export const logout = () => dispatch => {
  auth.signOut()
  dispatch({
    type: LOGOUT
  });


  dispatch({
    type: SIGNOUT_WITH_GOOGLE
  });
  var unsubscribe = auth.onAuthStateChanged((user) => {
    loginWithGoogle(user)
    console.log(user)
  })
  unsubscribe()
};

export const loginWithGoogle = (user) => dispatch => {
  dispatch({
    type: USER_SIGNIN_WITH_GOOGLE,
    payload: user
  })
  dispatch({
    type: SET_CURRENT_USER,
    payload: user
  })

}