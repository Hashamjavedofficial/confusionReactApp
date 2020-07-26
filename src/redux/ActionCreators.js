import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";
import axios from "axios";

export const addComment = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  },
});
export const fetchDishes = () => {
  return (dispatch) => {
    dispatch(dishesLoading(true));
    axios
      .get(baseUrl + "dishes")
      .then((response) => {
        dispatch(addDishes(response.data));
      })
      .catch((error) => {
        dispatch(dishesFailed(error.message));
      });
  };
};

export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING,
});

export const dishesFailed = (errmess) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmess,
});

export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes,
});

const addComments = (comments) => {
  return {
    type: ActionTypes.ADD_COMMENTS,
    payload: {
      comments,
    },
  };
};
const commentsFailed = (error) => {
  return {
    type: ActionTypes.COMMENTS_FAILED,
    payload: {
      error,
    },
  };
};

export const fetchComments = () => {
  return (dispatch) => {
    axios
      .get(baseUrl + "comments")
      .then((response) => {
        dispatch(addComments(response.data));
      })
      .catch((error) => {
        dispatch(commentsFailed(error.message));
      });
  };
};

const promoLoading = (status) => {
  return {
    type: ActionTypes.PROMOS_LOADING,
    payload: {
      status,
    },
  };
};
const promoFailed = (error) => {
  return {
    type: ActionTypes.PROMOS_FAILED,
    payload: {
      error,
    },
  };
};
const addPromo = (promos) => {
  return {
    type: ActionTypes.ADD_PROMOS,
    payload: {
      promos,
    },
  };
};

export const fetchPromos = () => {
  return (dispatch) => {
    dispatch(promoLoading(true));
    axios
      .get(baseUrl + "promotions")
      .then((response) => {
        dispatch(addPromo(response.data));
      })
      .catch((error) => {
        dispatch(promoFailed(error.message));
      });
  };
};
