import {ADD_TO_FAVORITE_LIST_SUCCESS} from './actions';
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
  favoriteFilms: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE_LIST_SUCCESS: {
      const {film}= action.payload.data;
      if(state.favoriteFilms.find((item)=>item.title===film.title)){

         return {favoriteFilms:state.favoriteFilms.filter(film=>film.title!==film.title)};
;}
        Toast(film.title + " added to favorite list");
      return {favoriteFilms:[...state.favoriteFilms,film]};
    }
    case 'REMOVE_TO_FAVORITE_LIST': {
      const {film}= action.payload;
      Toast(film.title + " removed from favorite list");
      return {favoriteFilms:state.favoriteFilms.filter(_film=>_film.id!==film.id)};

    } 
    default:
      return state;
  }
    
};

export {reducer};
