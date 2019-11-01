import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import configureStore from 'Store/index';
import createRootReducer from 'Store/rootReducer';

import App from './App';
import 'index.scss';

const store = configureStore({});

const hmrRender = Component => {
  render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

hmrRender(App);

if (module.hot) {
  module.hot.accept('./App.js', () => {
    hmrRender(App);
    store.replaceReducer(createRootReducer());
  });
}
