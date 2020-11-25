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
		alignInfo: "center",
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
		setAlign(state, { payload }) {
			return { ...state, alignInfo: payload };
		},
	},
});

export const {
	setSelectedButton,
	setLatexInput,
	setFont,
	setAlign,
} = actions;

export default reducer;
