import { createSlice } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
	name: "FEditor",
	initialState: {
		selectedButton: "",
		latexInput: "",
	},
	reducers: {
		setSelectedButton(state, { payload }) {
			return { ...state, selectedButton: payload };
		},
		setLatexInput(state, { payload }) {
			return { ...state, latexInput: payload };
		},
	},
});

export const {
	setSelectedButton,
	setLatexInput,
} = actions;

export default reducer;
