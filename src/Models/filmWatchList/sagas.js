import {takeEvery, put, call} from 'redux-saga/effects';
import {
  GET_REQUESTED_FILM,
  GET_REQUESTED_FILM_SUCCESS,
} from './actions';
import {queryApi} from '../query-api';
import {MOVIE_ENDPOINT,API_KEY} from '@env';

function* handler() {
  yield takeEvery(GET_REQUESTED_FILM, getFilmInfo);
}

function* getFilmInfo(action) {
  const {filmId} = action.payload;
  
  try {
    const {data} = yield call(queryApi, {
      endpoint: MOVIE_ENDPOINT+filmId+"?api_key="+API_KEY,
      method: 'GET',
    });

    // API call
    yield put({
      type: GET_REQUESTED_FILM_SUCCESS,
      payload: {
        data:{loading:false,film:data}
      
      },
    });
  } catch (err) {
    console.log(err);
    // Handle error
  }
}

export {handler};