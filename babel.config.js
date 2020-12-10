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

	const plugins = ["@babel/plugin-proposal-optional-chaining"];

	return { presets, plugins };
};
