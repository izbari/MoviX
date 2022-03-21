import {takeEvery, put, call} from 'redux-saga/effects';
import {
  ADD_TO_FAVORITE_LIST,
  ADD_TO_FAVORITE_LIST_SUCCESS,
} from './actions';
import {MOVIE_ENDPOINT,API_KEY} from '@env';
import axios from 'axios';
function* handler() {
  yield takeEvery(ADD_TO_FAVORITE_LIST, getFilmInfo);
}

function* getFilmInfo(action) {
  const {film} = action.payload;
  try {
    //api call'a gerek kalmadığı için direkt film objesini redux  state'e atıyoruz
    yield put({
      type: ADD_TO_FAVORITE_LIST_SUCCESS,
      payload: {
        data:{loading:false,film:film}
      },
    });
  } catch (err) {
    console.log(err);
    // Handle error
  }
}

export default handler