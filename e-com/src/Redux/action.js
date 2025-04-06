import axios from "axios";
import {
  POST_CART_FAILURE,
  POST_CART_REQUEST,
  POST_CART_SUCCESS,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
} from "./action.type";

export const postCart = (payload) => (dispatch) => {
  dispatch({ type: POST_CART_REQUEST });
  return axios
    .post("http://localhost:8080/posts", payload)
    .then((r) => {
      dispatch({ type: POST_CART_SUCCESS, payload: r.data });
      //   return { type: POST_CART_SUCCESS };
      dispatch(getCart());
    })
    .catch((e) => {
      dispatch({ type: POST_CART_FAILURE, payload: e });
      return { type: POST_CART_FAILURE };
    });
};

export const getCart = (payload) => (dispatch) => {
  dispatch({ type: GET_CART_REQUEST });
  return axios
    .get("  http://localhost:8080/posts", payload)
    .then((r) => {
      dispatch({ type: GET_CART_SUCCESS, payload: r.data });
      return { type: GET_CART_SUCCESS };
    })
    .catch((e) => {
      dispatch({ type: GET_CART_FAILURE, payload: e });
      return { type: GET_CART_FAILURE };
    });
};
