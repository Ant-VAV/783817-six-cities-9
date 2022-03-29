import { OtherActions } from '../../types/state';
import { StoreSpace } from '../../const';
import { createSlice } from '@reduxjs/toolkit';

const initialState: OtherActions = {
  error: '',
};

export const otherActions = createSlice({
  name: StoreSpace.OtherActions,
  initialState,
  reducers: {
    setErrorAction: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setErrorAction } = otherActions.actions;
