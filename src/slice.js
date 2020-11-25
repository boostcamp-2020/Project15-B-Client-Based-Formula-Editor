import { createSlice } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
	name: "FEditor",
	initialState: {
		selectedButton: "",
		mathquill: {
			latexInput: "",
			mathField: null,
		},
	},
	reducers: {
		setSelectedButton(state, { payload }) {
			state.selectedButton = payload;
		},
		setLatexInput(state, { payload }) {
			state.mathquill.latexInput = payload;
		},
		setMathField(state, { payload }) {
			state.mathquill.mathField = payload;
		},
	},
});

export const {
	setSelectedButton,
	setLatexInput,
	setMathField,
} = actions;

export default reducer;
