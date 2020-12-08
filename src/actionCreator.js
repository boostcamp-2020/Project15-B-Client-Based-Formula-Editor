import {
	INITIAL_ID,
	updateSidebar,
	updateCustomCommandList,
	addLatexItem,
	getIdToAdd,
	RECENT_TAB,
	BOOKMARK_TAB,
	CUSTOM_COMMAND_TAB,
	setLatexItem,
	deleteCustomCommand,
} from "./sliceUtil";

import { getCurrentDate } from "./util";

export default {
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
	addBookmarkItem(state, { payload: { latex, description } }) {
		addLatexItem(state, { latex, isBookmark: true, date: getCurrentDate(), description });
		updateSidebar(state);
	},
	setBookmarkItem(state, { payload }) {
		setLatexItem(state, payload);
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
	setCustomCommandList(state, { payload }) {
		state.customCommandList = payload;
		updateCustomCommandList(state);
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
	setTempSavedItem(state) {
		if (state.tempSavedLatexId === INITIAL_ID) {
			const id = getIdToAdd(state.latexList);
			const newItem = { id, latex: state.latexInput, isRecent: true, isBookmark: false, date: getCurrentDate() };

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
	openConfirmModal(state, { payload }) {
		state.confirmModal.isOpen = true;
		state.confirmModal.data = payload;
	},
	closeConfirmModal(state, { payload }) {
		state.confirmModal.isOpen = false;
		if (!payload) return;
		const dataToDelete = state.confirmModal.data;

		switch (dataToDelete.tabId) {
			case RECENT_TAB:
				setLatexItem(state, { id: dataToDelete.id, isRecent: false });
				break;
			case BOOKMARK_TAB:
				setLatexItem(state, { id: dataToDelete.id, isBookmark: false });
				break;
			case CUSTOM_COMMAND_TAB:
				deleteCustomCommand(state, { id: dataToDelete.index });
				break;
			default:
		}
	},
};
