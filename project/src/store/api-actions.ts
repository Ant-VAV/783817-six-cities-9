import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from './index';
import { PlaceInfo, Review } from '../types/client';
import { APIRoute, AuthorizationStatus, StoreApiAction, TIMEOUT_SHOW_ERROR } from '../const';
import { deleteToken, setToken } from '../api/token';
import { AuthData, UserApi } from '../types/api';
import { handleError } from '../api/handle-error';
import { setAuthStatusAction } from './user-process/user-process';
import { setPlaceListInfoAction, setPlaceReviewAction } from './places-data/places-data';
import { setErrorAction } from './other-actions/other-actions';

export const fetchPlacesInfoListAction = createAsyncThunk(
  StoreApiAction.FetchPlacesInfoList,
  async () => {
    try {
      const { data } = await api.get<PlaceInfo[]>(APIRoute.Hotels);
      store.dispatch(setPlaceListInfoAction(data));
    } catch (e) {
      handleError(e);
    }
  },
);

export const fetchPlaceReviewAction = createAsyncThunk(
  StoreApiAction.FetchPlaceReview,
  async (placeId: string) => {
    try {
      const { data } = await api.get<Review[]>(`${APIRoute.Comments}/${placeId}`);
      store.dispatch(setPlaceReviewAction(data));
    } catch (e) {
      handleError(e);
    }
  },
);

export const getAuthTokenAction = createAsyncThunk(
  StoreApiAction.GetAuthToken,
  async (authData: AuthData) => {
    try {
      const { data } = await api.post<UserApi>(APIRoute.Login, authData);
      setToken(data.token);
      store.dispatch(setAuthStatusAction(AuthorizationStatus.Authorized));
    } catch (e) {
      store.dispatch(setAuthStatusAction(AuthorizationStatus.NotAuthorized));
      handleError(e);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  StoreApiAction.GetAuthToken,
  async () => {
    try {
      await api.get<UserApi>(APIRoute.Login);
      store.dispatch(setAuthStatusAction(AuthorizationStatus.Authorized));
    } catch (e) {
      store.dispatch(setAuthStatusAction(AuthorizationStatus.NotAuthorized));
      handleError(e);
    }
  },
);


export const logoutAction = createAsyncThunk(
  StoreApiAction.Logout,
  async () => {
    try {
      await api.delete(APIRoute.Logout);
    } catch (e) {
      handleError(e);
    } finally {
      deleteToken();
      store.dispatch(setAuthStatusAction(AuthorizationStatus.NotAuthorized));
    }
  },
);

export const clearErrorAction = createAsyncThunk(
  StoreApiAction.ClearError,
  () => {
    setTimeout(
      () => store.dispatch(setErrorAction('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);
