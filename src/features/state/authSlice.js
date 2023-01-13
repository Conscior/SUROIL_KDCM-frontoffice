import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null },
  reducers: {
    // Set user and token
    setCredentials: (state, action) => {
      const { accessToken, userInfo } = action.payload;
      if (accessToken) state.token = accessToken;
      if (userInfo) state.user = userInfo;
    },
    // Clear user and token
    clearCredentials: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
