module.exports = function(api) {
	api.cache(true);

	const presets = [
		[
			"@babel/preset-env", {
				targets: {
					node: "current",
				},
			},
		], "@babel/preset-react",
	];

	const plugins = [];

	return { presets, plugins };
};
