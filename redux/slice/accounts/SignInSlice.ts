import type { UserLogIn } from '../../../ts/accounts';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userAPI } from './UserApi';

export const LoginUser = createAsyncThunk(
  'users/fetchLogin',
  async (user: UserLogIn) => {
    const { email, password } = user;

    try {
      const isLoginValid = await userAPI.checkLoginUser(email, password);
      if (isLoginValid) {
        return { email, password };
      } else {
        return;
      }
    } catch (error) {
      throw error;
    }
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
        state.isLoggedIn = true;
      })
      .addCase(LoginUser.rejected, (state, action) => {
        console.error('Login failed:', action.error.message);
      });
  },
});
