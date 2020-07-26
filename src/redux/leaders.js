import * as ActionTypes from "./ActionTypes";
const initiaState = {
  isLoading: true,
  error: null,
  leaders: [],
};
export const Leaders = (state = initiaState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_LEADERS:
      return { ...state, isLoading: false, leaders: action.payload.leaders };
    case ActionTypes.LEADER_LOADING:
      return { ...state, isLoading: true };
    case ActionTypes.LEADER_FAILED:
      return { ...state, error: action.payload.error, isLoading: false };
    default:
      return state;
  }
};
