import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createEpicMiddleware } from 'redux-observable';
import createRootReducer from './rootReducer';
import createRootEpic from './rootEpic';

const epicMiddleWare = createEpicMiddleware();
const composeEnhancers = composeWithDevTools({});

export default preloadedState => {
  const store = createStore(createRootReducer(), preloadedState, composeEnhancers(applyMiddleware(epicMiddleWare)));

  epicMiddleWare.run(createRootEpic());

  return store;
};
