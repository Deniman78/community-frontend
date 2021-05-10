import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducers from './reducers';

const middlewares = [thunk];

const enhancers = [applyMiddleware(...middlewares)];
const store = createStore(
  reducers,
  true ? composeWithDevTools(...enhancers) : compose(...enhancers)
);

export default store;
