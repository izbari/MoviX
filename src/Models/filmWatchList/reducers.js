import {GET_REQUESTED_FILM_SUCCESS} from './actions';

const initialState = {
  favoriteFilms: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REQUESTED_FILM_SUCCESS: {
      const {film}= action.payload.data;
      return {...state,film};
    }
    default:
      return state;
  }
};

export {reducer};
