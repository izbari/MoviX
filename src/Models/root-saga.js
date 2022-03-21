import {all, fork} from 'redux-saga/effects';
import favoriteSaga from './filmFavoriteList/sagas';
import watchListSaga from './filmWatchList/sagas';

export default function* rootSaga() {
  yield all([fork(favoriteSaga), fork(watchListSaga)]);
}
