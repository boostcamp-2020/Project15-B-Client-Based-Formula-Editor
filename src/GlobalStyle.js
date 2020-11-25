import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
		box-sizing: border-box;
	}
	body{
		overflow: hidden;
	}
`;

export const color = {
	light: "#82e9de",
	normal: "#4db6ac",
	dark: "#00867d",
	red: "#d73a49",
	blue: "#0366d6",
	yellow: "#ffc107",
};

export default GlobalStyle;
