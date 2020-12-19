import { createGlobalStyle } from "styled-components";

import { getTheme, reverseTheme } from "./util";
import popupStyle from "./popupStyle";
import color from "./constants/color";

const theme = getTheme();
const bodyBackgroundColor = color.mainTheme4[theme];
const scrollBackgroundColor = color.mainTheme4[reverseTheme(theme)];

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
		background-color: ${bodyBackgroundColor};
		-ms-user-select: none; /* Internet Explorer/Edge */
		-moz-user-select: -moz-none; /* Firefox */ 
		-webkit-user-select: none; /* Safari */ 
		-khtml-user-select: none; /* Konqueror HTML */ 
		user-select: none; /* supported by Chrome and Opera */
	}

	::-webkit-scrollbar { width: 12px; } /* 스크롤 바 */
	::-webkit-scrollbar-thumb { background: ${scrollBackgroundColor}22; } /* 실질적 스크롤 바 */
	::-webkit-scrollbar-thumb:hover { background: ${scrollBackgroundColor}33; } /* 실질적 스크롤 바 위에 마우스를 올려다 둘 때 */
	::-webkit-scrollbar-thumb:active { background: ${scrollBackgroundColor}44; } /* 실질적 스크롤 바를 클릭할 때 */
	::-webkit-scrollbar-button { display: none; } /* 스크롤 바 상 하단 버튼 */

	${popupStyle}
`;

export default GlobalStyle;
