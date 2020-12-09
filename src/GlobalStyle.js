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
    min-width: 810px;
    min-height: 313px;
		overflow-x: hidden;
	}

	::-webkit-scrollbar { width: 12px; } /* 스크롤 바 */
	::-webkit-scrollbar-thumb { background: #fff2; } /* 실질적 스크롤 바 */
	::-webkit-scrollbar-thumb:hover { background: #fff3; } /* 실질적 스크롤 바 위에 마우스를 올려다 둘 때 */
	::-webkit-scrollbar-thumb:active { background: #fff4; } /* 실질적 스크롤 바를 클릭할 때 */
	::-webkit-scrollbar-button { display: none; } /* 스크롤 바 상 하단 버튼 */
`;

export const themeColor = {
	white: "#cccccc",
	superLight: "#666666",
	light: "#313131",
	normal: "#252526",
	dark: "#111111",
	black: "#000000",
	blue: "#22659A",
	lightBlue: "#2A7AB8",
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
