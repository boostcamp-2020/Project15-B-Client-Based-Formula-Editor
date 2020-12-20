import styled from "styled-components";

import color from "../constants/color";

const FontContainerLayout = styled.div`
	display: flex;
	margin: 5px 0;

	button svg {
		fill: ${({ theme }) => color.mainTheme0[theme]};
	}
`;

export default FontContainerLayout;
