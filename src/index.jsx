import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { init } from '@rematch/core';
import createLoadingPlugin from '@rematch/loading';
import 'normalize.css';
import { createGlobalStyle } from 'styled-components';

import { App } from './App';
import * as serviceWorker from './serviceWorker';
import * as models from './models';

const GlobalStyle = createGlobalStyle`
  * {
    outline: none;
    box-sizing: border-box;
  }
`;

const loadingPlugin = createLoadingPlugin();

const store = init({
  plugins: [loadingPlugin],
  models
});

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
