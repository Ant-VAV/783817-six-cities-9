import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { MainProps } from './components/main/main';

const PageData: MainProps = {
  rentOffersTotal: 666,
};

ReactDOM.render(
  <React.StrictMode>
    <App rentOffersTotal={PageData.rentOffersTotal}/>
  </React.StrictMode>,
  document.getElementById('root'));
