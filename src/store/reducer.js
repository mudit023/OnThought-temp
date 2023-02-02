import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./noteData";

const store = configureStore({ reducer: { noteReducer } });

export default store;