import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { reducer as formReducer } from 'redux-form';

const middlewares = [thunk, createLogger()];

const rootReducer = combineReducers({
  form: formReducer,
});

export const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
