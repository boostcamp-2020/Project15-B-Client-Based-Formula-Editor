import { createSlice } from "@reduxjs/toolkit";

const RECENT_ITEMS = "recentItems";
const BOOKMARK_ITEMS = "bookmarkItems";
const saveLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const getLocalStorage = key => JSON.parse(localStorage.getItem(key)) || [];

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
		customCommand: "",
		bookmarkItems: getLocalStorage(BOOKMARK_ITEMS),
		recentItems: getLocalStorage(RECENT_ITEMS),
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
		setCustomCommand(state, { payload }) {
			state.customCommand = payload;
		},
		addBookmarkItem(state, { payload }) {
			if (!payload) return;
			state.bookmarkItems.push({ latex: payload });
			saveLocalStorage(BOOKMARK_ITEMS, state.bookmarkItems);
		},
		deleteBookmarkItem(state, { payload }) {
			state.bookmarkItems = state.bookmarkItems.filter((value, index) => index !== payload);
			saveLocalStorage(BOOKMARK_ITEMS, state.bookmarkItems);
		},
		deleteRecentItem(state, { payload }) {
			state.recentItems = state.recentItems.filter((_, index) => index !== payload);
			saveLocalStorage(RECENT_ITEMS, state.recentItems);
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
	setCustomCommand,
	addBookmarkItem,
	deleteBookmarkItem,
	deleteRecentItem,
} = actions;

export default reducer;
