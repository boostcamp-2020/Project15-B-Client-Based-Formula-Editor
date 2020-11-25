import { createSlice } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
	name: "FEditor",
	initialState: {
		selectedButton: "",
	},
	reducers: {
		setSelectedButton(state, { payload }) {
			return { ...state, selectedButton: payload };
		},
	},
});

export const {
	setSelectedButton,
} = actions;

export default reducer;
