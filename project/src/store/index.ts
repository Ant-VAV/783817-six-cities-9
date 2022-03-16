import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { initApi } from '../api/api';

export const api = initApi();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
