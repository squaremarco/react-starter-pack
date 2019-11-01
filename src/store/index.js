import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import createRootReducer from './rootReducer';

const composeEnhancers = composeWithDevTools({});

export default preloadedState =>
  createStore(createRootReducer(), preloadedState, composeEnhancers(applyMiddleware(thunk)));
