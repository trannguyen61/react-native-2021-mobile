import reducer from "./reducer";
import * as actions from "./actions";

const DEFAULT_STATE = {
  auth: {
    token: null,
    loginErr: null,
  },
  results: {
    movies: null,
    maxPages: null,
    resultsErr: null,
  },
};

const ADDITIONAL_MOVIES_STATE = {
    auth: {
      token: null,
      loginErr: null,
    },
    results: {
      movies: [],
      maxPages: 2,
      resultsErr: null,
    },
};

const merge = (prev, next) => Object.assign({}, prev, next);

describe("auth reducer", () => {
    it("should return the initial state", () => {
      expect(reducer(DEFAULT_STATE, {})).toEqual(DEFAULT_STATE);
    });
  
    it("should handle LOGIN", () => {
      const action = {
        type: actions.LOGIN,
        payload: { token: 'a' },
      };
      expect(reducer(DEFAULT_STATE, action)).toEqual(
        merge(DEFAULT_STATE, {
          auth: merge(action.payload, { loginErr: null }),
        })
      );
    });
  
    it("should handle LOGIN_FAILED", () => {
      const action = {
        type: actions.LOGIN_FAILED,
        payload: { loginErr: 'Error' },
      };
      expect(reducer(DEFAULT_STATE, action)).toEqual(
        merge(DEFAULT_STATE, {
          auth: merge({loginErr: action.payload.loginErr}, { token: null }),
        })
      );
    });
  });

describe("results reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(DEFAULT_STATE, {})).toEqual(DEFAULT_STATE);
  });

  it("should handle NEW_RESULTS_RECEIVED", () => {
    const action = {
      type: actions.NEW_RESULTS_RECEIVED,
      payload: { movies: [], maxPages: 1 },
    };
    expect(reducer(DEFAULT_STATE, action)).toEqual(
      merge(DEFAULT_STATE, {
        results: merge(action.payload, { resultsErr: null }),
      })
    );
  });

  it("should handle RESULTS_ERROR", () => {
    const action = {
      type: actions.RESULTS_ERROR,
      payload: { err: 'There\'s something wrong with the server. Please try again.' },
    };
    expect(reducer(DEFAULT_STATE, action)).toEqual(
      merge(DEFAULT_STATE, {
        results: merge({resultsErr: action.payload.err}, { movies: null, maxPages: null }),
      })
    );
  });

  it("should handle ADDITIONAL_RESULTS_RECEIVED", () => {
    const action = {
      type: actions.ADDITIONAL_RESULTS_RECEIVED,
      payload: { movies: [] },
    };
    expect(reducer(ADDITIONAL_MOVIES_STATE, action)).toEqual(
      merge(ADDITIONAL_MOVIES_STATE, {
        results: merge(action.payload, { resultsErr: null, maxPages: 2 }),
      })
    );
  });
});
