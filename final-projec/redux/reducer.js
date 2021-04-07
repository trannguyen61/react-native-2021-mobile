import { combineReducers } from 'redux';
import {
  SEARCH_QUERY_SENT,
  NEW_RESULTS_RECEIVED,
  ADDITIONAL_RESULTS_RECEIVED,
  RESULTS_ERROR,
  CLEAR_RESULTS,
  LOGIN,
  LOGIN_FAILED,
  LOGOUT
} from './actions';

const merge = (prev, next) => Object.assign({}, prev, next);

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return merge(state, {
        token: action.payload.token
      })
    case LOGIN_FAILED: 
      return merge(state, {
        loginErr: action.payload.loginErr
      })
    case LOGOUT: 
      return merge(state, {
        token: null
      })
    default:
      return state
  }
}

const resultsReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_RESULTS_RECEIVED:
      return merge(state, {
        movies: action.payload.movies,
        maxPages: action.payload.maxPages,
      });
    case ADDITIONAL_RESULTS_RECEIVED:
      return merge(state, {movies: [...state.movies, ...action.payload.movies]} );
    case RESULTS_ERROR:
      return merge(state, { resultsErr: action.payload.err });
    default:
      return state;
  }
};

const reducer = combineReducers({
  results: resultsReducer,
  auth: authReducer
});

export default reducer;