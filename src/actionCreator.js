import {
	INITIAL_ID,
	updateSidebar,
	updateCustomCommandList,
	addLatexItem,
	getIdToAdd,
	setLatexItem,
	checkIfPayloadEndsSpace,
} from "./sliceUtil";
import { getCurrentDate, reverseTheme } from "./util";

export default {
	setSelectedButton(state, { payload }) {
		state.selectedButton = payload;
	},
	setLatexInput(state, { payload }) {
		if (state.pastLatexInput === payload) return;
		if (state.buffer.length) return;
		state.futureLatexCommands = [];
		state.pastLatexCommands.unshift(state.latexInput);
		state.pastLatexInput = state.latexInput;
		if (checkIfPayloadEndsSpace(payload)) {
			state.latexInput = payload.trim();
			return;
		}
		state.latexInput = payload;
	},
	setLatexTextInput(state, { payload }) {
		if (state.buffer.length) return;
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
	setBookmarkItem(state, { payload }) {
		setLatexItem(state, payload);
	},
	addBookmarkItem(state, { payload: { latex, description } }) {
		addLatexItem(state, { latex, isBookmark: true, date: getCurrentDate(), description });
		updateSidebar(state);
	},
	removeBookmarkItem(state, { payload: id }) {
		setLatexItem(state, { id, isBookmark: false });
		updateSidebar(state);
	},
	removeAllBookmarkItems(state) {
		state.latexList.forEach(item => {
			item.isBookmark = false;
		});
		updateSidebar(state);
	},
	addRecentItem(state, { payload }) {
		addLatexItem(state, { latex: payload, isRecent: true, date: getCurrentDate() });

		if (state.tempSavedLatexId !== INITIAL_ID) {
			state.latexList = state.latexList.filter(({ id }) => id !== state.tempSavedLatexId);
			state.tempSavedLatexId = INITIAL_ID;
		}

		clearTimeout(state.timerId);
		updateSidebar(state);
	},
	removeRecentItem(state, { payload: id }) {
		setLatexItem(state, { id, isRecent: false });
		updateSidebar(state);
	},
	removeAllRecentItems(state) {
		state.latexList.forEach(item => {
			item.isRecent = false;
		});
		updateSidebar(state);
	},
	setBubblePopupOn(state, { payload }) {
		const { target, isOpen, message } = payload;

		state.bubblePopup[target] = { isOpen, message };
	},
	removeCustomCommand(state, { payload }) {
		state.customCommandList = state.customCommandList.filter((_, index) => index !== payload);
		updateCustomCommandList(state);
	},
	setCustomCommandList(state, { payload }) {
		state.customCommandList = payload;
		updateCustomCommandList(state);
	},
	setCustomFormValue(state, { payload }) {
		state.customFormValue = payload;
	},
	setCustomFormLatex(state, { payload }) {
		state.customFormValue.latex = payload;
	},
	setTimerId(state, { payload }) {
		state.timerId = payload;
	},
	setTempSavedItem(state) {
		if (state.tempSavedLatexId === INITIAL_ID) {
			const id = getIdToAdd(state.latexList);
			const newItem = {
				id,
				latex: state.latexInput,
				isRecent: true,
				isBookmark: false,
				date: getCurrentDate(),
			};

			state.latexList.push(newItem);
			state.tempSavedLatexId = id;
			updateSidebar(state);

			return;
		}

		const targetItem = state.latexList.find(({ id }) => id === state.tempSavedLatexId);

		targetItem.latex = state.latexInput;
		targetItem.date = getCurrentDate();
		updateSidebar(state);
	},
	setCursorPosition(state, { payload }) {
		state.cursorPosition = payload;
	},
	setCharacterTabState(state, { payload }) {
		state.characterTabState[payload] = !state.characterTabState[payload];
	},
	setBuffer(state, { payload }) {
		state.buffer = payload;
	},
	setSidebarState(state, { payload }) {
		state.sidebarState = payload;
	},
	toggleIsTutorialOn(state, { payload }) {
		localStorage.setItem("isTutorialOn", payload);

		state.isTutorialOn = payload;
	},
	toggleThemeColor(state) {
		state.theme = reverseTheme(state.theme);
		localStorage.setItem("theme", JSON.stringify(state.theme));
	},
};
