import {
  POST_CART_FAILURE,
  POST_CART_REQUEST,
  POST_CART_SUCCESS,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
} from "./action.type";

let initialState = {
  item: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_CART_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case POST_CART_SUCCESS: {
      return { ...state, isLoading: false, isError: false, item: payload };
    }
    case POST_CART_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    case GET_CART_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case GET_CART_SUCCESS: {
      return { ...state, isLoading: false, isError: false, item: payload };
    }
    case GET_CART_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    default:
      return state;
  }
};
