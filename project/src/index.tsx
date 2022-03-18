import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuthAction, fetchPlacesInfoListAction } from './store/api-actions';
import ErrorMessage from './components/error-message/error-message';

store.dispatch(fetchPlacesInfoListAction());
store.dispatch(checkAuthAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ErrorMessage/>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
