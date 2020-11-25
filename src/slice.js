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
		setPastLatexCommands(state, { payload }) {
			return { ...state, pastLatexCommands: payload };
		},
		setPresentLatexCommand(state, { payload }) {
			return { ...state, presentLatexCommand: payload };
		},
		setFutureLatexCommands(state, { payload }) {
			return { ...state, futureLatexCommands: payload };
		},
	},
});

export const {
	setSelectedButton,
	setPastLatexCommands,
	setPresentLatexCommand,
	setFutureLatexCommands,
} = actions;

export default reducer;
