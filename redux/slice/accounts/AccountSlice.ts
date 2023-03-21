import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userAPI } from "./UserApi";
import { User } from "../../../ts/accounts";

export const insertNewUser = createAsyncThunk(
  "users/createUserStatus",
  async (userData: User, thunkAPI) => {
    try {
      const response = await userAPI.create(userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

interface AccountState {
  status: "idle" | "pending" | "success" | "failure";
  error: string | null | undefined;
  data: User | null;
}

const initialState: AccountState = {
  status: "idle",
  error: null,
  data: null,
};

export const AccountSlice = createSlice({
  name: "insertUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(insertNewUser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(insertNewUser.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(insertNewUser.rejected, (state, action) => {
        state.status = "failure";
        state.error = action.error.message;
      });
  },
});
