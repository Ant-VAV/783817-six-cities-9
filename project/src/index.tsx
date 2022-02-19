import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { MainProps } from './pages/main/main';
import { BrowserRouter } from 'react-router-dom';

const PageData: MainProps = {
  rentOffersTotal: 666,
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App rentOffersTotal={PageData.rentOffersTotal}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'));
