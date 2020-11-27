module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: ["plugin:react/recommended", "naver"],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {
		"linebreak-style": "off",
		"object-curly-spacing": ["error", "always"],
		"react/prop-types": "off",
		"array-element-newline": "off",
	},
};
