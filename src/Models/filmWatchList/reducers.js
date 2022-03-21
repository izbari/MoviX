import {ADD_TO_WATCH_LIST_SUCCESS} from './actions';

const initialState = {
  watchList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WATCH_LIST_SUCCESS: {
      const {film}= action.payload.data;
      return [...state.watchList,film];
    }
    default:
      return state;
  }
};

export {reducer};
