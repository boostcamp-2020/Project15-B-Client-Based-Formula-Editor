import { createSlice } from "@reduxjs/toolkit";

import {
	INITIAL_ID,
	initLatexList,
	updateSidebar,
	addLatexItem,
	getIdToAdd,
	compareRecent,
	compareBookmark,
	setBookmark,
} from "./sliceUtil";

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
			imageDownload: { isOpen: false, message: "" },
			linkCopy: { isOpen: false, message: "" },
			formulaSave: { isOpen: false, message: "" },
		},
		tempSavedLatexId: INITIAL_ID,
		latexList,
		recentItems: latexList.filter(item => item.isRecent).sort(compareRecent),
		bookmarkItems: latexList.filter(item => item.isBookmark).sort(compareBookmark),
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
		setBookmarkItem(state, { payload }) {
			setBookmark(state, payload);
			updateSidebar(state);
		},
		addRecentItem(state, { payload }) {
			addLatexItem(state, { latex: payload, isRecent: true });

			if (state.tempSavedLatexId !== INITIAL_ID) {
				state.latexList = state.latexList.filter(({ id }) => id !== state.tempSavedLatexId);
				state.tempSavedLatexId = INITIAL_ID;
			}

			clearTimeout(state.timerId);
			updateSidebar(state);
		},
		deleteRecentItem(state, { payload }) {
			const latexItem = state.latexList.find(({ id }) => id === payload);

			latexItem.isRecent = false;
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
			if (state.tempSavedLatexId === INITIAL_ID) {
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

const setPopup = (dispatch, config, ms) => {
	dispatch(setBubblePopupOn({ ...config, isOpen: true }));

	setTimeout(() => {
		dispatch(setBubblePopupOn({ ...config, isOpen: false }));
	}, ms);
};

export const openBubblePopup = payload => dispatch => setPopup(dispatch, payload, 1000);

const saveTempItem = dispatch => () => {
	dispatch(setTempSavedItem());

	const config = {
		target: "formulaSave",
		message: "임시저장 되었습니다",
	};

	setPopup(dispatch, config, 2000);
};

const startBubblePopupDebounce = (dispatch, getState) => {
	const state = getState();

	clearTimeout(state.timerId);

	const timerId = setTimeout(saveTempItem(dispatch), 10000);

	dispatch(setTimerId(timerId));
};

const setDebounce = (actionCreater, payload) => (dispatch, getState) => {
	dispatch(actionCreater(payload));
	startBubblePopupDebounce(dispatch, getState);
};

export const setLatexInputWithDebounce = payload => setDebounce(setLatexInput, payload);

export const setLatexTextInputWithDebounce = payload => setDebounce(setLatexTextInput, payload);

export default reducer;
