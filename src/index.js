import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider, setApiBaseUrl } from '@sygnalgroup/react-sg-modules'

// https://crudcrud.com - YOU CAN CREATE A NEW URL IN THIS SITE
setApiBaseUrl('https://crudcrud.com/api/44b98a29e4904354a678f31350dcb501')

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);