import * as ActionTypes from "./ActionTypes";
export const Promotions = (
  state = {
    isLoading: true,
    error: null,
    promos: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_PROMOS:
      return { ...state, promos: action.payload.promos, isLoading: false };
    case ActionTypes.PROMOS_LOADING:
      return { ...state, isLoading: true };
    case ActionTypes.PROMOS_FAILED:
      return { ...state, error: action.payload.error, isLoading: false };
    default:
      return state;
  }
};
