import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { initApi } from '../api/api';
import { redirect } from './middlewares/redirect';

export const api = initApi();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});
