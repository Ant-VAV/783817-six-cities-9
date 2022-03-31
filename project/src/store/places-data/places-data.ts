import { PlacesData } from '../../types/state';
import { StoreSpace } from '../../const';
import { createSlice } from '@reduxjs/toolkit';

const initialState: PlacesData = {
  placeInfoList: [],
  placeReview: [],
  isDataLoaded: false,
};

export const placeData = createSlice({
  name: StoreSpace.PlacesInfo,
  initialState,
  reducers: {
    setPlaceListInfoAction: (state, action) => {
      state.placeInfoList = action.payload;
      state.isDataLoaded = true;
    },
    setPlaceReviewAction: (state, action) => {
      state.placeReview = action.payload;
    },
  },
});

export const { setPlaceListInfoAction, setPlaceReviewAction } = placeData.actions;
