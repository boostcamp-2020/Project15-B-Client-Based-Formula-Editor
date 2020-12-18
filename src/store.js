import { configureStore } from "@reduxjs/toolkit";

import FECodeReducer from "./slice";

const store = configureStore({
	reducer: FECodeReducer,
});

export default store;
