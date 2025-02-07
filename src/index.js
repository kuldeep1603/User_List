import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// store 
import store from './Apis/store';
// provider 
import { Provider } from 'react-redux';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


