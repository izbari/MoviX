import {takeEvery, put} from 'redux-saga/effects';
import {
  ADD_TO_FAVORITE_LIST,
  ADD_TO_FAVORITE_LIST_SUCCESS,
  ADD_TO_FAVORITE_LIST_FAILURE,
} from './actions';

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
    yield put({
      type: ADD_TO_FAVORITE_LIST_FAILURE,
      payload: {
        data:{loading:false,film:{}}
      },
    });
  }
}

export default handler