import styled from "styled-components";

import { color } from "../GlobalStyle";

const FontContainerStyle = styled.div`
	display: flex;
	margin: 5px 0;

	button svg {
		fill: ${color.dark};
	}
`;

export default FontContainerStyle;
