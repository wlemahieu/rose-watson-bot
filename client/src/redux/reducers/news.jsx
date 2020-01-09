import * as types from '../actionTypes';

const initialState = {
  articles: [],
  headlines: [],
  sources: []
};

export default function (state = initialState, action) {
  switch (action.type) {
  case types.SAVE_ARTICLES: {
    return {
      ...state,
      articles: [...state.articles, action.payload.articles]
    };
  }
  case types.SAVE_HEADLINES: {
    return {
      ...state,
      headlines: [...state.headlines, action.payload.headlines]
    };
  }
  case types.SAVE_SOURCES: {
    return {
      ...state,
      sources: [...state.sources, action.payload.sources]
    };
  }
  default:
    return state;
  }
}
