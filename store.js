import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {reducer} from './src/Models/root-reducer';
import {handler as favoriteSaga} from './src/Models/filmFavoriteList/sagas';
import {handler as watchListSaga} from './src/Models/filmFavoriteList/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(favoriteSaga);

export {store};