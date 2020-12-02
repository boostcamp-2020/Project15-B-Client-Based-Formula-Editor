import { createSlice } from "@reduxjs/toolkit";

import {
	initLatexList,
	updateSidebar,
	addLatexItem,
	compareRecent,
	compareBookmark,
	setBookmark,
} from "./util";

const latexList = initLatexList();

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
		latexList,
		recentItems: latexList.filter(item => item.isRecent).sort(compareRecent),
		bookmarkItems: latexList.filter(item => item.isBookmark).sort(compareBookmark),
		customCommands: [{ id: 0, command: "\\sum", latex: "\\sum" }],
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
		addBookmarkItem(state, { payload }) {
			addLatexItem(state, { latex: payload, isBookmark: true });
			updateSidebar(state);
		},
		setBookmarkItem(state, { payload }) {
			setBookmark(state, payload);
			updateSidebar(state);
		},
		addRecentItem(state, { payload }) {
			addLatexItem(state, { latex: payload, isRecent: true });
			updateSidebar(state);
		},
		deleteRecentItem(state, { payload }) {
			const latexItem = state.latexList.find(({ id }) => id === payload);

			latexItem.isRecent = false;
			updateSidebar(state);
		},
		setBubblePopupOn(state, { payload }) {
			const { target, isOpen } = payload;

			state.bubblePopup[target] = isOpen;
		},
		setCustomCommands(state, { payload }) {
			state.customCommands = payload;
		},
		setCustomFormValue(state, { payload }) {
			state.customFormValue = payload;
		},
		setCustomFormLatex(state, { payload }) {
			state.customFormValue.latex = payload;
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
	addBookmarkItem,
	setBookmarkItem,
	addRecentItem,
	deleteRecentItem,
	setBubblePopupOn,
	setCustomCommands,
	setCustomFormValue,
	setCustomFormLatex,
} = actions;

export const deleteCustomCommand = payload => dispatch => {
	dispatch(setCustomFormValue({ ...payload.customFormValue, state: false }));
	dispatch(setCustomCommands(payload.newCustomCommands));
};

export const openBubblePopup = payload => dispatch => {
	dispatch(setBubblePopupOn(payload));

	setTimeout(() => {
		dispatch(setBubblePopupOn({ target: payload.target, isOpen: false }));
	}, 1000);
};

export default reducer;
