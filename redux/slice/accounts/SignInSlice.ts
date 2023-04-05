import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { UserLogIn } from '../../../ts/accounts';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userAPI } from './UserApi';

export const LoginUser = createAsyncThunk(
  'users/fetchLogin',
  async (users: UserLogIn) => {
    const response = await userAPI.fetchLogin(users);
    return response.data;
  }
);

const initialState: UserLogIn = {
  email: '',
  password: '',
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'logInUser',
  initialState,
  reducers: {
    // Reducer comes here
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.password = action.payload.password;
        state.isLoggedIn = true;
      })
      .addCase(LoginUser.rejected, (state, action) => {
        console.error('Login failed:', action.error.message);
      });
  },
});
