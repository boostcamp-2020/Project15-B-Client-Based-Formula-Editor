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
    min-height: 313px;
		overflow-x: hidden;
		-ms-user-select: none; /* Internet Explorer/Edge */
		-moz-user-select: -moz-none; /* Firefox */ 
		-webkit-user-select: none; /* Safari */ 
		-khtml-user-select: none; /* Konqueror HTML */ 
		user-select:none; /* supported by Chrome and Opera */
	}

	::-webkit-scrollbar { width: 12px; } /* 스크롤 바 */
	::-webkit-scrollbar-thumb { background: #fff2; } /* 실질적 스크롤 바 */
	::-webkit-scrollbar-thumb:hover { background: #fff3; } /* 실질적 스크롤 바 위에 마우스를 올려다 둘 때 */
	::-webkit-scrollbar-thumb:active { background: #fff4; } /* 실질적 스크롤 바를 클릭할 때 */
	::-webkit-scrollbar-button { display: none; } /* 스크롤 바 상 하단 버튼 */

	.popup {
		width: max-content;
    position: fixed;
    color: #cccccc;
    background-color: #313131;
    border: 1px solid #666666;
    border-radius: 3px;
    padding: 20px 30px;
		left: 50%;
		transform: translate(-50%, 0);
		transition: 1s;
		z-index: 3;

		> input {
			width: 100%;
		}

		> div:last-child {
			display: flex;
			justify-content: flex-end;
			margin-top: 15px;
		}

		> div > button {
			background-color: #666666;
			color: white;
			padding: 1px 10px 2px 10px;
			margin-left: 3px;
			border: none;
			cursor: pointer;
		}

		animation-name: down;
		animation-duration: 0.5s;
		animation-iteration-count: 1;
		animation-fill-mode: forwards;
	}

	@keyframes down {
		0%   { top: -100px; }
		100% { top: 10px; }
	}
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
