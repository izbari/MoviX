import {combineReducers} from 'redux';
import {reducer as filmFavoriteList} from './filmFavoriteList/reducers';
import {reducer as filmWatchList} from './filmWatchList/reducers';


const reducer = combineReducers({
  filmFavoriteList: filmFavoriteList,
  filmWatchList : filmWatchList,
});

export {reducer};