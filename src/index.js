import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider, setApiBaseUrl } from '@sygnalgroup/react-sg-modules'

setApiBaseUrl('https://crudcrud.com/api/a1cf21cf15b74a2387f6e8cf62a00502')

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);