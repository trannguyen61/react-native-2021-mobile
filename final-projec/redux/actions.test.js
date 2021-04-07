import * as actions from './actions';

describe('login returns response', () => {
    const mockFetch = (username, password) => {
        if (username == 'a' && password == 'a') {
          return { token: 'token' }
        }
    
        return { err: 'Wrong credentials.' }
    };

    it('dispatches LOGIN when successfully logged in', async () => {
        const mockDispatch = jest.fn();
        await actions.onLogin('a', 'a', mockFetch)(mockDispatch);
        expect(mockDispatch.mock.calls[0][0]).toEqual({
          type: actions.LOGIN,
          payload: { token: 'token' },
        });
        expect(mockDispatch.mock.calls[1]).toMatchSnapshot();
    });

    it('dispatches LOGIN_FAILED with wrong credentials', async () => {
        const mockDispatch = jest.fn();
        await actions.onLogin('a', 'abc', mockFetch)(mockDispatch);
        expect(mockDispatch.mock.calls[0][0]).toEqual({
          type: actions.LOGIN_FAILED,
          payload: { loginErr: 'Wrong credentials.' },
        });
        expect(mockDispatch.mock.calls[1]).toMatchSnapshot();
    });
})

describe('onFetchMovies returns actions', () => {
  const mockFetch = (searchTerm, pageNumber) => {
    if (searchTerm === 'test' && (pageNumber === 1 || pageNumber == 2)) {
      return { results: [], totalResults: 20 };
    }

    throw new Error(errMessage);
  };

  it('dispatches SEARCH_QUERY_SENT', async () => {
    const mockDispatch = jest.fn();
    await actions.onFetchMovies('', '')(mockDispatch);
    expect(mockDispatch.mock.calls[0][0]).toEqual({
      type: actions.SEARCH_QUERY_SENT,
    });
  });

  it('dispatches NEW_RESULTS_RECEIVED when has search query and page 1', async () => {
    const mockDispatch = jest.fn();
    await actions.onFetchMovies('test', 1, mockFetch)(mockDispatch);
    expect(mockDispatch.mock.calls[1][0]).toEqual({
      type: actions.NEW_RESULTS_RECEIVED,
      payload: { movies: [], maxPages: 2 },
    });
    expect(mockDispatch.mock.calls[1]).toMatchSnapshot();
  });

  it('dispatches ADDITIONAL_RESULTS_RECEIVED when has search query and page 2', async () => {
    const mockDispatch = jest.fn();
    await actions.onFetchMovies('test', 2, mockFetch)(mockDispatch);

    expect(mockDispatch.mock.calls[1][0]).toEqual({
      type: actions.ADDITIONAL_RESULTS_RECEIVED,
      payload: { movies: [] },
    });
    expect(mockDispatch.mock.calls[1]).toMatchSnapshot();
  });

  it('dispatches RESULTS_ERROR with incorrect arguments', async () => {
    const mockDispatch = jest.fn();
    await actions.onFetchMovies(test, 1000, mockFetch)(mockDispatch);

    expect(mockDispatch.mock.calls[1][0]).toEqual({
      type: actions.RESULTS_ERROR,
      payload: { err: "There's something wrong with the server. Please try again." },
    });
    expect(mockDispatch.mock.calls[1]).toMatchSnapshot();
  });
});