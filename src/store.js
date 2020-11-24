import { configureStore } from "@reduxjs/toolkit";

import FEditorReducer from "./slice";

const store = configureStore({
	reducer: FEditorReducer,
});

export default store;
