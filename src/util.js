export const latexFunction = { insertLatex: () => { } };

export const toFitSimple = cb => {
	let tick = false;

	return ({ target }) => {
		if (tick) return () => { };
		tick = true;
		return requestAnimationFrame(() => {
			tick = false;
			return cb({ target });
		});
	};
};

/* local storage 관련 모듈 */

export const LATEX_LIST = "latexList";
export const CUSTOM_LIST = "customList";

export const saveLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));

export const getLocalStorage = (key, defaultValue) =>
	JSON.parse(localStorage.getItem(key)) || defaultValue;

export const updateSidebar = state => {
	state.latexList = state.latexList.filter(item => item.isRecent || item.isBookmark);
	state.bookmarkItems = state.latexList.filter(item => item.isBookmark);
	state.recentItems = state.latexList.filter(item => item.isRecent);
	saveLocalStorage(LATEX_LIST, state.latexList);
};

export const updateCustomCommandList = state => {
	saveLocalStorage(CUSTOM_LIST, state.customCommandList);
};

export const getIdToAdd = list => list.reduce((maxId, { id }) => (maxId < id ? id : maxId), 0) + 1;

export const addLatexItem = (state, { latex, isRecent = false, isBookmark = false }) => {
	const id = getIdToAdd(state.latexList);
	const newItem = { id, latex, isRecent, isBookmark };

	state.latexList.push(newItem);
};
