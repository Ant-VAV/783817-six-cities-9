import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuthAction, fetchPlacesInfoListAction } from './store/api-actions';
import ErrorMessage from './components/error-message/error-message';
import browserHistory from './browser-history';
import { HistoryRouter } from './components/history-route/history-route';

store.dispatch(fetchPlacesInfoListAction());
store.dispatch(checkAuthAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <ErrorMessage/>
        <App/>
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
