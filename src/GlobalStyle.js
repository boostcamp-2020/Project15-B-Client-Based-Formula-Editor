import { createGlobalStyle } from "styled-components";

import { reverseTheme } from "./util";
import popupStyle from "./popupStyle";
import color from "./constants/color";

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: "NotoSansKR-Regular";
		src: local(※), url("../public/NotoSansKR-Regular.otf") format("opentype");
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;

		&:not(.mq-math-mode, .mq-editable-field) {
			font-family: "NotoSansKR-Regular";
		}
	}
	
	html, body, #app {
		height: 100%;
	}

	body {
		background-color: ${({ theme }) => color.mainTheme4[theme]};
		-ms-user-select: none; /* Internet Explorer/Edge */
		-moz-user-select: -moz-none; /* Firefox */ 
		-webkit-user-select: none; /* Safari */ 
		-khtml-user-select: none; /* Konqueror HTML */ 
		user-select: none; /* supported by Chrome and Opera */
	}

	${({ theme }) => {
		const scrollBackgroundColor = color.mainTheme4[reverseTheme(theme)];

		return `
			::-webkit-scrollbar { width: 12px; } /* 스크롤 바 */
			::-webkit-scrollbar-thumb { background: ${scrollBackgroundColor}22; } /* 실질적 스크롤 바 */
			::-webkit-scrollbar-thumb:hover { background: ${scrollBackgroundColor}33; } /* 실질적 스크롤 바 위에 마우스를 올려다 둘 때 */
			::-webkit-scrollbar-thumb:active { background: ${scrollBackgroundColor}44; } /* 실질적 스크롤 바를 클릭할 때 */
			::-webkit-scrollbar-button { display: none; } /* 스크롤 바 상 하단 버튼 */

			${popupStyle(theme)}
		`;
	}}
`;

export default GlobalStyle;
