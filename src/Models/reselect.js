import { createSelector } from 'reselect'// selector
const favorites = (list) => {
    return list;
   }// reselect function
const watchList = (list) => {
    return list;
   }// reselect function

export const  getFavorites = createSelector(
  [ favorites ],
  (favList) => (favList)
)
export const  getWatchlists = createSelector(
  [ watchList ],
  (watchList) => (watchList)
)