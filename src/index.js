import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { init } from '@rematch/core';
import 'normalize.css';

import { App } from './App';
import * as serviceWorker from './serviceWorker';

const store = init();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
