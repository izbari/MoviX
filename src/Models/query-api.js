import axios from 'react-native-axios';
import {call} from 'redux-saga/effects';

function* queryApi({endpoint}) {
  const res = yield call(makeRequest, {
    endpoint,
  });
  if (res.status === 401) {
  }

//   const parsedResponse = yield call(parseResponse, res);
// //   if (!res.ok) {
// //   }

  return res;
}

const makeRequest = async ({endpoint}) => {
  return axios.get(endpoint);
   
};

// const parseResponse = async ({data}) => {
//   let parsedResponse;
//   try {
//     parsedResponse = await data.clone().json();
//   } catch {
//     parsedResponse = await data.text();
//   }

//   return parsedResponse;
// };

export {queryApi};
