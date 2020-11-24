import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const color = {
	light: "#82e9de",
	normal: "#4db6ac",
	dark: "#00867d",
};

export default GlobalStyle;
