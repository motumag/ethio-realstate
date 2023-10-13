import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice.js";
// import { composeWithDevTools } from "@redux-devtools/extension";

export const store = configureStore({
  reducer: { user: userReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  //   enhancers: [composeWithDevTools()],
});
