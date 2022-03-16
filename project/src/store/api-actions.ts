import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from './index';
import { setPlaceListInfoAction } from './actions';
import { PlaceInfo } from '../types/client';
import { APIRoute, StoreApiAction } from '../const';

export const fetchPlacesInfoListAction = createAsyncThunk(
  StoreApiAction.FetchPlacesInfoListAsync,
  async () => {
    const { data } = await api.get<PlaceInfo[]>(APIRoute.Hotels);
    store.dispatch(setPlaceListInfoAction(data));
  },
);
