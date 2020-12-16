module.exports = function(api) {
	api.cache(true);

	const presets = [
		[
			"@babel/preset-env", {
				targets: {
					node: "current",
					ie: "11",
				},
				useBuiltIns: "usage",
				corejs: 3,
			},
		], "@babel/preset-react",
	];

	const plugins = ["@babel/plugin-proposal-optional-chaining"];

	return { presets, plugins };
};
