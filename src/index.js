import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import configureStore from './store';
import { updateCoords } from './store/pageScroll';

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById('root'));

if (process.env.NODE_ENV !== 'production'){
  window.store = store
  window.updateCoords = updateCoords
}

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

root.render(
    <Root />
);
