import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import ShopContextProvider from './ShopContext';

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ShopContextProvider>
        <App />
      </ShopContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
