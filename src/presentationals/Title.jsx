import React from "react";
import styled from "styled-components";

import title from "../../public/title.png";

const TitleStlye = styled.div`
	text-align: center;
	margin: 10px 0;
	img {
		height: 50px;
		margin-left: 10px;
	}
`;

export default function Title() {
	return (
		<TitleStlye>
			<img src="favicon.ico" />
			<img src={title} />
		</TitleStlye>
	);
}
