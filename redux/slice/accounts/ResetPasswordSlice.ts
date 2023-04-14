import { resetLogin } from '@/ts/accounts';
import { userAPI } from './UserApi';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const resetPassword = createAsyncThunk(
  'users/resetPassword',
  async (usersInfo: resetLogin) => {
    const { email, password } = usersInfo;
    try {
      const response = await userAPI.resetPassword(email, password);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

interface ResetPasswordState {
  status: string | null | undefined;
  error: string | null | undefined;
  data: resetLogin | null;
}

export const initialState: ResetPasswordState = {
  status: '',
  error: '',
  data: null,
};

export const ResetPasswordSlice = createSlice({
  name: 'resetPassword',
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = initialState.status;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(resetPassword.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.status = 'success';
        if (state.data) {
          state.data.password = action.payload;
        }
      });
  },
});

export const { resetStatus } = ResetPasswordSlice.actions;
