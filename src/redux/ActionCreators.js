import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";
import axios from "axios";

const addComment = (comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    comment,
  },
});

export const postComment = (dishId, rating, author, comment) => {
  return (dispatch) => {
    const newComment = {
      dishId: dishId,
      rating: rating,
      author: author,
      comment: comment,
    };
    newComment.date = new Date().toISOString();
    axios
      .post(baseUrl + "comments", newComment)
      .then((response) => {
        console.log(response.data);
        dispatch(addComment(response.data));
      })
      .catch((error) => {
        dispatch(commentsFailed(error.message));
      });
  };
};
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

const addLeaders = (leaders) => {
  return {
    type: ActionTypes.ADD_LEADERS,
    payload: {
      leaders,
    },
  };
};

const leaderLoading = (status) => {
  return {
    type: ActionTypes.LEADER_LOADING,
    payload: {
      status,
    },
  };
};
const leaderFailed = (error) => {
  return {
    type: ActionTypes.LEADER_FAILED,
    payload: {
      error,
    },
  };
};
export const fetchLeaders = () => {
  return (dispatch) => {
    dispatch(leaderLoading(true));
    axios
      .get(baseUrl + "leaders")
      .then((response) => {
        dispatch(addLeaders(response.data));
      })
      .catch((error) => {
        dispatch(leaderFailed(error.message));
      });
  };
};

export const postFeedback = (feedback) => {
  return (dispatch) => {
    axios
      .post(baseUrl + "feedback", feedback)
      .then((response) => {
        alert(JSON.stringify(response.data));
      })
      .catch((error) => {
        alert(error.message);
      });
  };
};
