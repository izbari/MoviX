import {takeEvery, put, call} from 'redux-saga/effects';
import {
  ADD_TO_WATCH_LIST, ADD_TO_WATCH_LIST_SUCCESS,
} from './actions';
import {queryApi} from '../query-api';
import {MOVIE_ENDPOINT,API_KEY} from '@env';

function* handler() {
  yield takeEvery(ADD_TO_WATCH_LIST, getFilmInfo);
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
      type: ADD_TO_WATCH_LIST_SUCCESS,
      payload: {
        data:{loading:false,film:data}
      
      },
    });
  } catch (err) {
    console.log(err);
    // Handle error
  }
}

export default handler; 