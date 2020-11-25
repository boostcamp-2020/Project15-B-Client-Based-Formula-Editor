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
			return { ...state, selectedButton: payload };
		},
		setLatexInput(state, { payload }) {
			return {
				...state,
				mathquill: {
					...state.mathquill,
					latexInput: payload,
				},
			};
		},
	},
});

export const {
	setSelectedButton,
	setLatexInput,
} = actions;

export default reducer;
