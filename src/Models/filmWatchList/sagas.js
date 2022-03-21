import {takeEvery, put, call} from 'redux-saga/effects';
import {
  ADD_TO_WATCH_LIST, ADD_TO_WATCH_LIST_SUCCESS,
} from './actions';
import {MOVIE_ENDPOINT,API_KEY} from '@env';

function* handler() {
  yield takeEvery(ADD_TO_WATCH_LIST, getFilmInfo);
}

function* getFilmInfo(action) {
  const {film} = action.payload;
  
  try {
    
    // API call
    yield put({
      type: ADD_TO_WATCH_LIST_SUCCESS,
      payload: {
        data:{loading:false,film:film}
      },
    });
  } catch (err) {
    console.log(err);
    // Handle error
  }
}

export default handler; 