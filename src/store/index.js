import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createEpicMiddleware } from 'redux-observable';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import createRootReducer from './rootReducer';
import createRootEpic from './rootEpic';

const composeEnhancers = composeWithDevTools({});

const epic$ = new BehaviorSubject(createRootEpic());
const hotReloadingEpic = (...args) => epic$.pipe(switchMap(epic => epic(...args)));

const epicMiddleware = createEpicMiddleware();

export default preloadedState => {
  const store = createStore(createRootReducer(), preloadedState, composeEnhancers(applyMiddleware(epicMiddleware)));

  epicMiddleware.run(hotReloadingEpic);

  if (module.hot) {
    module.hot.accept('./rootReducer', () => store.replaceReducer(createRootReducer()));
    module.hot.accept('./rootEpic', () => epic$.next(createRootEpic()));
  }

  return store;
};
