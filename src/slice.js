import { createSlice } from "@reduxjs/toolkit";

const BOOKMARK_ITEMS = "bookmarkItems";
const LATEX_LIST = "latexList";

const saveLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const getLocalStorage = key => JSON.parse(localStorage.getItem(key)) || [];
const getIdToAdd = list => list.reduce((maxId, { id }) => (maxId < id ? id : maxId), 0) + 1;
const updateSidebar = state => {
	state.latexList = state.latexList.filter(item => item.isRecent || item.isBookmark);
	state.bookmarkItems = state.latexList.filter(item => item.isBookmark);
	state.recentItems = state.latexList.filter(item => item.isRecent);
	saveLocalStorage(LATEX_LIST, state.latexList);
};

const latexList = getLocalStorage(LATEX_LIST);

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
		bubblePopup: {
			imageDownload: false,
			linkCopy: false,
			formulaSave: false,
		},
		latexList,
		bookmarkItems: latexList.filter(item => item.isBookmark),
		recentItems: latexList.filter(item => item.isRecent),
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
			const index = state.latexList.findIndex(({ id }) => id === payload);

			state.latexList[index].isBookmark = false;
			updateSidebar(state);
		},
		setBookmarkItem(state, { payload }) {
			const index = state.latexList.findIndex(({ id }) => id === payload.id);

			state.latexList[index].isBookmark = payload.isBookmark;
			updateSidebar(state);
		},
		addRecentItem(state, { payload }) {
			if (!payload) return;
			const newItem = {
				id: getIdToAdd(state.latexList),
				latex: payload,
				isRecent: true,
				isBookmark: false,
			};

			state.latexList.push(newItem);
			updateSidebar(state);
		},
		deleteRecentItem(state, { payload }) {
			const index = state.latexList.findIndex(({ id }) => id === payload);

			state.latexList[index].isRecent = false;
			updateSidebar(state);
		},
		setBubblePopupOn(state, { payload }) {
			const { target, isOpen } = payload;

			state.bubblePopup[target] = isOpen;
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
	setBookmarkItem,
	addRecentItem,
	deleteRecentItem,
	setBubblePopupOn,
} = actions;

export const openBubblePopup = payload => dispatch => {
	dispatch(setBubblePopupOn(payload));

	setTimeout(() => {
		dispatch(setBubblePopupOn({ target: payload.target, isOpen: false }));
	}, 1000);
};

export default reducer;
