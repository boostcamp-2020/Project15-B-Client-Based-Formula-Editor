export const latexFunction = { insertLatex: () => {} };

export const toFitSimple = cb => {
	let tick = false;

	return ({ target }) => {
		if (tick) return () => {};
		tick = true;
		return requestAnimationFrame(() => {
			tick = false;
			return cb({ target });
		});
	};
};

/* local storage 관련 모듈 */

const LATEX_LIST = "latexList";
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

const getIdToAdd = list => list.reduce((maxId, { id }) => (maxId < id ? id : maxId), 0) + 1;

const getBookmarkPriorityToAdd = (list, isBookmark) =>
	(isBookmark ? list.reduce((maxId, { bookmarkPriority }) =>
		(maxId < bookmarkPriority ? bookmarkPriority : maxId), 0) + 1 : 0);

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
