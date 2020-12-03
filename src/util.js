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
