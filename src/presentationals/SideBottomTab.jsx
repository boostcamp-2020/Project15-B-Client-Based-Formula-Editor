import React from "react";
import styled from "styled-components";

import { themeColor } from "../GlobalStyle";
import SaveIcon from "../icons/SaveIcon";
import ShareIcon from "../icons/ShareIcon";
import ImageFileIcon from "../icons/ImageFileIcon";
import IconButton from "../presentationals/IconButton";

const Layout = styled.div`
	> button {
		display: block;
		margin: 12px 0;
	}

	svg {
		fill: ${themeColor.superLight};
	}
`;


export default function SideBottomTab() {
	const bottomMenus = [
		<SaveIcon key={0} />,
		<ShareIcon key={1} />,
		<ImageFileIcon key={2} />,
	];

	return (
		<Layout>
			{bottomMenus.map((action, idx) => <IconButton key={idx} isHover={true} icon={action} />)}
		</Layout>
	);
}
