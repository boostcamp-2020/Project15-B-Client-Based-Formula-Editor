import { createSlice } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
	name: "FEditor",
	initialState: {
		selectedButton: "",
		pastLatexCommands: [],
		futureLatexCommands: [],
		latexInput: "",
		pastLatexInput: "",
		fontInfo: {
			size: "15",
			color: "#000000",
		},
		alignInfo: "center",
		bubblePopup: {
			imageDownload: false,
			linkCopy: false,
			formulaSave: false,
		},
		bookmarkItems: JSON.parse(localStorage.getItem("bookmarkItems")) || [],
		customFormValue: { state: false, name: "등록", command: "", latex: "", id: -1, isDisabled: false },
	},
	reducers: {
		setSelectedButton(state, { payload }) {
			state.selectedButton = payload;
		},
		setLatexInput(state, { payload }) {
			if (state.pastLatexInput === payload) return;
			state.futureLatexCommands = [];
			state.pastLatexCommands.unshift(state.latexInput);
			state.pastLatexInput = state.latexInput;
			state.latexInput = payload;
		},
		setLatexTextInput(state, { payload }) {
			state.futureLatexCommands = [];
			state.pastLatexCommands.unshift(state.latexInput);
			state.pastLatexInput = payload;
			state.latexInput = payload;
		},
		setFont(state, { payload }) {
			state.fontInfo = { size: payload.size, color: payload.color };
		},
		setAlign(state, { payload }) {
			state.alignInfo = payload;
		},
		undoEvent(state) {
			if (state.pastLatexCommands.length === 0) return;
			state.futureLatexCommands.unshift(state.latexInput);
			state.pastLatexInput = state.pastLatexCommands[0];
			state.latexInput = state.pastLatexCommands.shift();
		},
		redoEvent(state) {
			if (state.futureLatexCommands.length === 0) return;
			state.pastLatexCommands.unshift(state.latexInput);
			state.pastLatexInput = state.futureLatexCommands[0];
			state.latexInput = state.futureLatexCommands.shift();
		},
		resetEvent(state) {
			state.pastLatexCommands.unshift(state.latexInput);
			state.latexInput = "";
		},
		setBubblePopupOn(state, { payload }) {
			const { target, isOpen } = payload;

			state.bubblePopup[target] = isOpen;
		},
		addBookmarkItem(state) {
			if (state.latexInput.length === 0) return;
			state.bookmarkItems.push({ latex: state.latexInput });
			localStorage.setItem("bookmarkItems", JSON.stringify(state.bookmarkItems));
		},
		deleteBookmarkItem(state, { payload }) {
			state.bookmarkItems = state.bookmarkItems.filter((value, index) => index !== payload);
			localStorage.setItem("bookmarkItems", JSON.stringify(state.bookmarkItems));
		},
		setCustomFormValue(state, { payload }) {
			state.customFormValue = payload;
		},
	},
});

export const {
	setSelectedButton,
	setLatexInput,
	setLatexTextInput,
	setFont,
	setAlign,
	undoEvent,
	redoEvent,
	resetEvent,
	setBubblePopupOn,
	addBookmarkItem,
	deleteBookmarkItem,
	setCustomFormValue,
} = actions;

export const openBubblePopup = payload => dispatch => {
	dispatch(setBubblePopupOn(payload));

	setTimeout(() => {
		dispatch(setBubblePopupOn({ target: payload.target, isOpen: false }));
	}, 1000);
};

export default reducer;
