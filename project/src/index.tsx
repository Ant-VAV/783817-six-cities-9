import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { BrowserRouter } from 'react-router-dom';
import { getPlaceListInfo } from './mocks/place-list-info';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App placeInfoList={getPlaceListInfo()}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'));
