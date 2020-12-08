import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	html, body, #app {
		height: 100%;
	}

	body {
		overflow-x: hidden;
	}
`;

export const themeColor = {
	white: "#cccccc",
	superLight: "#666666",
	light: "#313131",
	normal: "#252526",
	dark: "#111111",
	black: "#000000",
	blue: "#3f4d92",
	lightBlue: "#4e5ca0",
};

export const color = {
	superLight: "#ddfff6",
	light: "#82e9de",
	normal: "#4db6ac",
	dark: "#00867d",
	red: "#d73a49",
	blue: "#0366d6",
	yellow: "#ffc107",
};

export default GlobalStyle;
