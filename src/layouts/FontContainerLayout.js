import styled from "styled-components";

import { themeColor } from "../GlobalStyle";

const FontContainerStyle = styled.div`
	display: flex;
	margin: 5px 0;

	button svg {
		fill: ${themeColor.white};
	}
`;

export default FontContainerStyle;
