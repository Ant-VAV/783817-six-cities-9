import { UserProcess } from '../../types/state';
import { AuthorizationStatus, StoreSpace } from '../../const';
import { createSlice } from '@reduxjs/toolkit';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const userProcess = createSlice({
  name: StoreSpace.User,
  initialState,
  reducers: {
    setAuthStatusAction: (state, action) => {
      state.authorizationStatus = action.payload;
    },
  },
});

export const { setAuthStatusAction } = userProcess.actions;
