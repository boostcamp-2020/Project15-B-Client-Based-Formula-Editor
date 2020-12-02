export const LATEX_LIST = "latexList";
export const INITIAL_ID = 0;

export const saveLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));

export const getLocalStorage = (key, defaultValue) =>
	JSON.parse(localStorage.getItem(key)) || defaultValue;

export const updateSidebar = state => {
	state.latexList = state.latexList.filter(item => item.isRecent || item.isBookmark);
	state.bookmarkItems = state.latexList.filter(item => item.isBookmark);
	state.recentItems = state.latexList.filter(item => item.isRecent);
	saveLocalStorage(LATEX_LIST, state.latexList);
};

export const getIdToAdd = list => list.reduce((maxId, { id }) => (maxId < id ? id : maxId), 0) + 1;

export const addLatexItem = (state, { latex, isRecent = false, isBookmark = false }) => {
	const id = getIdToAdd(state.latexList);
	const newItem = { id, latex, isRecent, isBookmark };

	state.latexList.push(newItem);
};
