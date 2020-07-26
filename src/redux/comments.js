import * as ActionTypes from "./ActionTypes";

export const Comments = (
  state = {
    error: null,
    comments: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return { ...state, comments: action.payload.comments };
    case ActionTypes.COMMENTS_FAILED:
      return { ...state, error: action.payload.error };
    case ActionTypes.ADD_COMMENT:
      var comment = action.payload.comment;
      return { ...state, comments: state.comments.concat(comment) };

    default:
      return state;
  }
};
