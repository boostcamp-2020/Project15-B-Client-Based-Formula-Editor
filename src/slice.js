import { createSlice } from "@reduxjs/toolkit";

import {
	LATEX_LIST,
	getLocalStorage,
	updateSidebar,
	addLatexItem,
	getIdToAdd,
} from "./sliceUtil";

const latexList = getLocalStorage(LATEX_LIST, []);

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
			imageDownload: { isOpen: false, message: "" },
			linkCopy: { isOpen: false, message: "" },
			formulaSave: { isOpen: false, message: "" },
		},
		tempSavedLatexId: 0,
		latexList,
		bookmarkItems: latexList.filter(item => item.isBookmark),
		recentItems: latexList.filter(item => item.isRecent),
		customCommands: [{ id: 0, command: "\\sum", latex: "\\sum" }],
		customFormValue: { state: false, name: "등록", command: "", latex: "", id: -1, isDisabled: false },
		timerId: "",
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
			addLatexItem(state, { latex: payload, isRecent: true });

			if (state.tempSavedLatexId !== 0) {
				state.latexList = state.latexList.filter(({ id }) => id !== state.tempSavedLatexId);
			}

			state.tempSavedLatexId = 0;
			clearTimeout(state.timerId);
			updateSidebar(state);
		},
		deleteRecentItem(state, { payload }) {
			const index = state.latexList.findIndex(({ id }) => id === payload);

			state.latexList[index].isRecent = false;
			updateSidebar(state);
		},
		setBubblePopupOn(state, { payload }) {
			const { target, isOpen, message } = payload;

			state.bubblePopup[target] = { isOpen, message };
		},
		setCustomCommands(state, { payload }) {
			state.customCommands = payload;
		},
		setCustomFormValue(state, { payload }) {
			state.customFormValue = payload;
		},
		setTimerId(state, { payload }) {
			state.timerId = payload;
		},
		setCustomFormLatex(state, { payload }) {
			state.customFormValue.latex = payload;
		},
		setTempSavedItem(state, { payload }) {
			if (state.tempSavedLatexId === 0) {
				const id = getIdToAdd(state.latexList);
				const newItem = { id, latex: state.latexInput, isRecent: true, isBookmark: false };

				state.latexList.push(newItem);
				state.tempSavedLatexId = id;
				updateSidebar(state);

				return;
			}

			const targetItem = state.latexList.find(({ id }) => id === state.tempSavedLatexId);

			targetItem.latex = state.latexInput;
			updateSidebar(state);
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
	deleteBookmarkItem,
	setBookmarkItem,
	addRecentItem,
	deleteRecentItem,
	setBubblePopupOn,
	setCustomCommands,
	setCustomFormValue,
	setTimerId,
	setCustomFormLatex,
	setTempSavedItem,
} = actions;

export const deleteCustomCommand = payload => dispatch => {
	dispatch(setCustomFormValue({ ...payload.customFormValue, state: false }));
	dispatch(setCustomCommands(payload.newCustomCommands));
};

export const openBubblePopup = payload => dispatch => {
	dispatch(setBubblePopupOn(payload));

	setTimeout(() => {
		dispatch(setBubblePopupOn({ ...payload, isOpen: false }));
	}, 1000);
};

const startBubblePopupDebounce = (dispatch, getState) => {
	const state = getState();

	clearTimeout(state.timerId);
	const timerId = setTimeout(() => {
		dispatch(setTempSavedItem());

		const bubblePopupState = {
			target: "formulaSave",
			isOpen: true,
			message: "임시저장 되었습니다",
		};

		dispatch(setBubblePopupOn(bubblePopupState));
		setTimeout(() => {
			dispatch(setBubblePopupOn({ ...bubblePopupState, isOpen: false }));
		}, 2000);
	}, 10000);

	dispatch(setTimerId(timerId));
};

export const setLatexInputWithDebounce = payload => (dispatch, getState) => {
	dispatch(setLatexInput(payload));
	startBubblePopupDebounce(dispatch, getState);
};

export const setLatexTextInputWithDebounce = payload => (dispatch, getState) => {
	dispatch(setLatexTextInput(payload));
	startBubblePopupDebounce(dispatch, getState);
};

export default reducer;
