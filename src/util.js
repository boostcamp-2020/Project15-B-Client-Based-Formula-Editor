import { SIDE_MIN_WIDTH, BODY_MIN_WIDTH } from "./constants/size";

const changeOneLetterToTwo = number => (number > 9 ? number : number.toString().padStart(2, 0));

export const latexFunction = { insertLatex: () => { }, insertClickedLatex: () => { } };

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

export const throttle = (fn, delay) => {
	let timer = true;

	return function(...args) {
		if (!timer) return;
		timer = false;
		fn.apply(this, args);
		setTimeout(() => { timer = true; }, delay);
	};
};

export const encodeLatex = latex => encodeURIComponent(latex.replace(/\\ /g, " "));

export const decodeQueryString = () => {
	const queryParameter = location.search.replace(/\?latex=/g, "").replace(/%20/g, "@");
	const latexParameter = decodeURIComponent(queryParameter);
	const latex = latexParameter?.replace(/@/g, "\\ ");

	return latex;
};

export const getCurrentDate = () => {
	const today = new Date();

	const year = today.getFullYear();
	const month = changeOneLetterToTwo(today.getMonth() + 1);
	const date = changeOneLetterToTwo(today.getDate());
	const hour = changeOneLetterToTwo(today.getHours());
	const minutes = changeOneLetterToTwo(today.getMinutes());
	const seconds = changeOneLetterToTwo(today.getSeconds());

	return `${year}.${month}.${date} ${hour}:${minutes}:${seconds}`;
};

export const calcCurrentXRatio = pageX => {
	let left = pageX < SIDE_MIN_WIDTH ? SIDE_MIN_WIDTH : pageX;
	const right = (window.innerWidth - pageX);

	if (right < BODY_MIN_WIDTH) left = window.innerWidth - BODY_MIN_WIDTH;
	return (100 * left / window.innerWidth).toFixed(6);
};

export const getBackslashCountFromLatex = latex => latex.split("").filter(char => char === "\\").length;
