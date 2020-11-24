import { createSlice } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
	name: "FEditor",
	initialState: {
		ButtonState: {
			OperatorButtonState: false,
			CharacterButtonState: false,
			FormulaButtonState: false,
		},
	},
	reducers: {
		setOperatorButtonState(state, { payload }) {
			return { ...state, ButtonState: { OperatorButtonState: payload } };
		},
		setCharacterButtonState(state, { payload }) {
			return { ...state, ButtonState: { CharacterButtonState: payload } };
		},
		setFormulaButtonState(state, { payload }) {
			return { ...state, ButtonState: { FormulaButtonState: payload } };
		},
	},
});

export const {
	setOperatorButtonState,
	setCharacterButtonState,
	setFormulaButtonState,
} = actions;

export default reducer;
