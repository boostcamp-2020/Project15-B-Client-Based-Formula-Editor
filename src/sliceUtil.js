export const LATEX_LIST = "latexList";
export const CUSTOM_LIST = "customList";
export const INITIAL_ID = 0;
export const RECENT_TAB = 0;
export const BOOKMARK_TAB = 1;
export const CUSTOM_COMMAND_TAB = 2;
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

export const getIdToAdd = list => getMaxValueFromList(list, "id");

const getBookmarkPriorityToAdd = (list, isBookmark) =>
	(isBookmark ? getMaxValueFromList(list, "bookmarkPriority") : 0);

export const addLatexItem = (state, { latex, isRecent = false, isBookmark = false }) => {
	const id = getIdToAdd(state.latexList);
	const bookmarkPriority = getBookmarkPriorityToAdd(state.bookmarkItems, isBookmark);
	const newItem = { id, latex, isRecent, isBookmark, bookmarkPriority };

	state.latexList.push(newItem);
};

export const setBookmark = (state, { id, isBookmark }) => {
	const latexItem = state.latexList.find(item => item.id === id);

	latexItem.isBookmark = isBookmark;
	latexItem.bookmarkPriority = getBookmarkPriorityToAdd(state.bookmarkItems, isBookmark);
};
