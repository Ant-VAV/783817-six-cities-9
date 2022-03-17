import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchPlacesInfoListAction } from './store/api-actions';

store.dispatch(fetchPlacesInfoListAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
