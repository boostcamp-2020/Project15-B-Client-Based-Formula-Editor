import { createSlice } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
	name: "FEditor",
	initialState: {
		selectedButton: "",
		pastLatexCommands: [],
		presentLatexCommand: "",
		futureLatexCommands: [],
	},
	reducers: {
		setSelectedButton(state, { payload }) {
			return { ...state, selectedButton: payload };
		},
		setControlLatexCommand(state, { payload }) {
			return { ...state, ...payload };
		},
	},
});

export const {
	setSelectedButton,
	setControlLatexCommand,
} = actions;

export default reducer;
