import { fetchMovies } from '../api/movies';
import { login } from '../api/auth'

export const SEARCH_QUERY_SENT = 'SEARCH_QUERY_SENT';
export const NEW_RESULTS_RECEIVED = 'NEW_RESULTS_RECEIVED';
export const ADDITIONAL_RESULTS_RECEIVED = 'ADDITIONAL_RESULTS_RECEIVED';
export const RESULTS_ERROR = 'RESULTS_ERROR';
export const LOGIN = 'LOGIN'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const LOGOUT = 'LOGOUT'

export const onLogin = (username, password, loginFn = login) => async (dispatch) => {
  const response = loginFn(username, password)
  if (response.token) {
    dispatch({
      type: LOGIN,
      payload: { token: response.token }
    })
  } else {
    dispatch({
      type: LOGIN_FAILED,
      payload: { loginErr: response.err }
    })
  }
}

export const onFetchMovies = (search, pageNumber, fetchFn = fetchMovies) => async (dispatch) => {
  dispatch({ type: SEARCH_QUERY_SENT });
  try {
    const response = await fetchFn(search, pageNumber);
    const results = response.results;

    const totalResults = response.totalResults;
    const maxPages = Math.ceil(totalResults / 10); // 10 results per page

    if (pageNumber === 1) {
      dispatch({
        type: NEW_RESULTS_RECEIVED,
        payload: { movies: results, maxPages: maxPages },
      });
    } else {
      dispatch({
        type: ADDITIONAL_RESULTS_RECEIVED,
        payload: { movies: results },
      });
    }
  } catch (err) {
    dispatch({ type: RESULTS_ERROR, payload: {
        err: 'There\'s something wrong with the server. Please try again.'
    } });
  }
};