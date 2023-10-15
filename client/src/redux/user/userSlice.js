import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    profileUpdateStart: (state) => {
      state.loading = true;
    },
    profileUpdateSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    profileUpdateFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});
export const {
  signInStart,
  signInSuccess,
  signInFailure,
  profileUpdateStart,
  profileUpdateSuccess,
  profileUpdateFailure,
} = userSlice.actions;
export default userSlice.reducer;
