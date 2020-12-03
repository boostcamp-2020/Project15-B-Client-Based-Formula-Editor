import {
	INITIAL_ID,
	updateSidebar,
	updateCustomCommandList,
	addLatexItem,
	getIdToAdd,
	setBookmark,
} from "./sliceUtil";

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
};
