import React from "react";
import styled from "styled-components";

const TitleStlye = styled.div`
	text-align: center;

	> img {
		height: 80px;
	}
`;

export default function Title() {
	return (
		<TitleStlye>
			<img src="https://i.imgur.com/Dl9saAC.png" />
		</TitleStlye>
	);
}
