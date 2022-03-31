import { FilterParams } from '../../types/state';
import { City, SortType, StoreSpace } from '../../const';
import { createSlice } from '@reduxjs/toolkit';

const initialState: FilterParams = {
  city: City.Paris,
  sortType: SortType.Popular,
};

export const filterParams = createSlice({
  name: StoreSpace.FilterParams,
  initialState,
  reducers: {
    changeCityAction: (state, action) => {
      state.city = action.payload || initialState.city;
    },
    changeSortType: (state, action) => {
      state.sortType = action.payload || initialState.sortType;
    },
  },
});

export const { changeCityAction, changeSortType } = filterParams.actions;
