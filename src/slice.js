import { createSlice } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
	name: "FEditor",
	initialState: {
		selectedButton: "",
		latexInput: "",
		fontInfo: {
			size: "15",
			color: "black",
		},
	},
	reducers: {
		setSelectedButton(state, { payload }) {
			return { ...state, selectedButton: payload };
		},
		setLatexInput(state, { payload }) {
			return { ...state, latexInput: payload };
		},
		setFont(state, { payload }) {
			return { ...state, fontInfo: { size: payload.size, color: payload.color } };
		},
	},
});

export const {
	setSelectedButton,
	setLatexInput,
	setFont,
} = actions;

export default reducer;
