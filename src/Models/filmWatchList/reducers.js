import {ADD_TO_WATCH_LIST_SUCCESS} from './actions';
import { ToastAndroid } from 'react-native'
const Toast = (text) => {
  ToastAndroid.showWithGravityAndOffset(
    text,
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};
const initialState = {
  watchList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WATCH_LIST_SUCCESS: {
     const {film}= action.payload.data;
     console.log("film",film);
      if(state.watchList.some((item)=>item.id===film.id)){

         return {watchList:state.watchList.filter(item=>item.id!==film.id)};
;}
        Toast(film.title + " added to watch list");
      return {watchList:[...state.watchList,film]};
    }
    case "REMOVE_TO_WATCHLIST": {
      const {film} = action.payload;
      return {watchList:state.watchList.filter(_film=>_film.id!==film.id)};
    }

    default:
      return state;
  }
};

export {reducer};
