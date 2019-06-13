import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import store from './store';
import env from './environments';
import 'semantic-ui-css/semantic.min.css';
import RouteMap from './routes';
import { baseURL } from './environments/environment.prod';

axios.defaults.headers.common.Authorization = baseURL;

window.addEventListener('error', (event) => {
  const { error: { stack } } = event;
  axios.post(env.errorHandler, { stack });
});


const Root = (
  <Provider store={store}>
    <BrowserRouter>
      <RouteMap />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
