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
	const month = (today.getMonth() + 1).toString().padStart(2, 0);
	const date = today.getDate().toString()
		.padStart(2, 0);

	const hour = today.getHours().toString()
		.padStart(2, 0);
	const minutes = today.getMinutes().toString()
		.padStart(2, 0);
	const seconds = today.getSeconds().toString()
		.padStart(2, 0);

	return `${year}.${month}.${date} ${hour}:${minutes}:${seconds}`;
};
