import { getCurrentDate } from "./util";

export const LATEX_LIST = "latexList";
export const CUSTOM_LIST = "customList";
export const INITIAL_ID = 0;

const ID = "id";
const BOOKMARK_PRIORITY = "bookmarkPriority";

export const saveLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));

export const getLocalStorage = (key, defaultValue) =>
	JSON.parse(localStorage.getItem(key)) || defaultValue;

export const initLatexList = () => getLocalStorage(LATEX_LIST, []);

const compareDesc = prop => (a, b) => b[prop] - a[prop];

export const compareRecent = (a, b) => compareDesc(ID)(a, b);
export const compareBookmark = (a, b) => compareDesc(BOOKMARK_PRIORITY)(a, b);

export const updateSidebar = state => {
	state.latexList = state.latexList.filter(item => item.isRecent || item.isBookmark);
	state.recentItems = state.latexList.filter(item => item.isRecent).sort(compareRecent);
	state.bookmarkItems = state.latexList.filter(item => item.isBookmark).sort(compareBookmark);
	saveLocalStorage(LATEX_LIST, state.latexList);
};

export const updateCustomCommandList = state => {
	saveLocalStorage(CUSTOM_LIST, state.customCommandList);
};

const getMaxValueFromList = (list, prop) =>
	(list.length ? Math.max(...list.map(el => el[prop])) + 1 : 0);

export const getIdToAdd = list => getMaxValueFromList(list, ID);

const getBookmarkPriorityToAdd = (list, isBookmark) =>
	(isBookmark ? getMaxValueFromList(list, BOOKMARK_PRIORITY) : 0);

export const addLatexItem = (state, { latex, isRecent = false, isBookmark = false, description = "" }) => {
	const id = getIdToAdd(state.latexList);
	const bookmarkPriority = getBookmarkPriorityToAdd(state.bookmarkItems, isBookmark);
	const newItem = {
		id,
		latex,
		isRecent,
		isBookmark,
		bookmarkPriority,
		date: getCurrentDate(),
		description,
	};

	state.latexList.push(newItem);
};

export const setLatexItem = (state, { id, isRecent, isBookmark, description }) => {
	const latexItem = state.latexList.find(item => item.id === id);

	if (description) latexItem.description = description;
	if (isRecent !== undefined) latexItem.isRecent = isRecent;
	if (isBookmark !== undefined) {
		latexItem.isBookmark = isBookmark;
		latexItem.bookmarkPriority = getBookmarkPriorityToAdd(state.bookmarkItems, latexItem.isBookmark);
	}
	updateSidebar(state);
};

export const deleteCustomCommand = (state, { id }) => {
	state.customFormValue = { ...state.customFormValue, state: false };
	state.customCommandList = state.customCommandList.filter((_, index) => index !== id);
	updateCustomCommandList(state);
};

export const checkIfPayloadEndsSpace = payload => payload.charAt(payload.length - 1) === " " && payload.charAt(payload.length - 2) !== "\\";
