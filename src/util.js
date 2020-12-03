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
