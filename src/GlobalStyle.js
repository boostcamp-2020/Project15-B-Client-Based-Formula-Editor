import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
		box-sizing: border-box;
	}

	body {
		overflow: hidden;
	}

  .mq-math-mode {
		width: 100%;
		height: 100%;
		margin: auto;
    padding: 130px;
		border: none;
		text-align: center;
	}
`;

export const color = {
	light: "#82e9de",
	normal: "#4db6ac",
	dark: "#00867d",
};

export default GlobalStyle;
