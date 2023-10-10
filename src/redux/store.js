import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./slices/RootSlice";

export const store = configureStore({
   reducer: rootReducer,
   devTools: true, 
}) ;