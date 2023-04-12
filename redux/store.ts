import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { AccountSlice } from './slice/accounts/AccountSlice';
import { userSlice } from './slice/accounts/SignInSlice';
import { ResetPasswordSlice } from './slice/accounts/ResetPasswordSlice';

export const store = configureStore({
  reducer: {
    account: AccountSlice.reducer,
    loginAccount: userSlice.reducer,
    resetPassword: ResetPasswordSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
