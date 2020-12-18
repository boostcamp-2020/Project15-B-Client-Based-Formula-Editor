import { createSlice } from "@reduxjs/toolkit";

import actionCreator from "./actionCreator";
import {
	INITIAL_ID,
	initLatexList,
	compareRecent,
	compareBookmark,
	CUSTOM_LIST,
	getLocalStorage,
} from "./sliceUtil";

const latexList = initLatexList();

const { reducer, actions } = createSlice({
	name: "FECode",
	initialState: {
		selectedButton: "",
		pastLatexCommands: [],
		futureLatexCommands: [],
		latexInput: "",
		pastLatexInput: "",
		fontInfo: {
			size: 20,
			color: "#ffffff",
		},
		alignInfo: "center",
		bubblePopup: {
			tutorial: { isOpen: false, message: "" },
			imageDownload: { isOpen: false, message: "" },
			linkCopy: { isOpen: false, message: "" },
			formulaSave: { isOpen: false, message: "" },
		},
		tempSavedLatexId: INITIAL_ID,
		latexList,
		customCommandList: getLocalStorage(CUSTOM_LIST, []),
		recentItems: latexList.filter(item => item.isRecent).sort(compareRecent),
		bookmarkItems: latexList.filter(item => item.isBookmark).sort(compareBookmark),
		customFormValue: { state: false, name: "등록", command: "", latex: "", description: "", id: -1 },
		timerId: "",
		cursorPosition: { x: 0, y: 0 },
		characterTabState: {
			character: false,
			operator: false,
			formula: false,
			example: false,
		},
		buffer: [],
		sidebarState: true,
		isTutorialOn: JSON.parse(localStorage.getItem("isTutorialOn")),
	},
	reducers: actionCreator,
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
	setBookmarkItem,
	addBookmarkItem,
	removeBookmarkItem,
	removeAllBookmarkItems,
	addRecentItem,
	removeRecentItem,
	removeAllRecentItems,
	setBubblePopupOn,
	removeCustomCommand,
	setCustomCommandList,
	setCustomFormValue,
	setCustomFormLatex,
	setTimerId,
	setTempSavedItem,
	setCursorPosition,
	setCharacterTabState,
	setBuffer,
	setSidebarState,
	toggleIsTutorialOn,
} = actions;

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

const startBubblePopupDebounce = (dispatch, getState, isLatexEmpty) => {
	const state = getState();

	clearTimeout(state.timerId);

	if (isLatexEmpty) return;

	const timerId = setTimeout(saveTempItem(dispatch), 10000);

	dispatch(setTimerId(timerId));
};

const setDebounce = (actionFunction, payload) => (dispatch, getState) => {
	dispatch(actionFunction(payload));

	const isLatexEmpty = payload.length === 0;

	startBubblePopupDebounce(dispatch, getState, isLatexEmpty);
};

export const setLatexInputWithDebounce = payload => setDebounce(setLatexInput, payload);

export const setLatexTextInputWithDebounce = payload => setDebounce(setLatexTextInput, payload);

export default reducer;
