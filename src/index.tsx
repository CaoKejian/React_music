import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/assets/css/reset.css'
import 'normalize.css'
import { HashRouter } from 'react-router-dom'
import App from '@/App';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store ={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);
