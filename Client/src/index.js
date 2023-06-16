import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartContextProvider } from './Server/Context/ContextProviders/cartContext';
import { UserContextProvider } from './Server/Context/ContextProviders/userContext';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <CartContextProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </CartContextProvider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
