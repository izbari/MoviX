import {ADD_TO_WATCH_LIST_SUCCESS} from './actions';

const initialState = {
  watchList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WATCH_LIST_SUCCESS: {
      console.log("reducer buraya geldi")
      const {film} = action.payload.data;
      return {watchList:[...state.watchList,film]};
    }
    case "REMOVE_TO_WATCHLIST": {
      const {film} = action.payload;
      console.log("filmm-> ",film)
      return {watchList:state.watchList.filter(_film=>_film.id!==film.id)};
    }

    default:
      return state;
  }
};

export {reducer};
