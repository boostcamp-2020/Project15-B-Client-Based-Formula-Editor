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
			state.selectedButton = payload;
		},
		setLatexInput(state, { payload }) {
			state.latexInput = payload;
		},
		setFont(state, { payload }) {
			state.fontInfo = { size: payload.size, color: payload.color };
		},
		setAlign(state, { payload }) {
			state.alignInfo = payload;
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
