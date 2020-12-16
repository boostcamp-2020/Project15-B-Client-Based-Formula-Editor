import React from "react";
import styled from "styled-components";

import { themeColor } from "../GlobalStyle";
import HelpIcon from "../icons/HelpIcon";
import SaveIcon from "../icons/SaveIcon";
import ShareIcon from "../icons/ShareIcon";
import ImageFileIcon from "../icons/ImageFileIcon";
import IconButton from "../presentationals/IconButton";
import BubblePopup from "../presentationals/BubblePopup";

const Div = styled.div`
	margin: 12px 0;

	svg {
		fill: ${themeColor.superLight};
	}
`;

export default function SideBottomTab({
	tutorial,
	imageDownload,
	linkCopy,
	formulaSave,
	handleOpenTutorial,
	handleSaveFormula,
	handleCopyLink,
	handleDownloadAsImage,
}) {
	const bottomMenus = [
		{
			icon: <HelpIcon />,
			popup: tutorial,
			onClick: handleOpenTutorial,
		},
		{
			icon: <SaveIcon />,
			popup: formulaSave,
			onClick: handleSaveFormula,
		},
		{
			icon: <ShareIcon />,
			popup: linkCopy,
			onClick: handleCopyLink,
		},
		{
			icon: <ImageFileIcon />,
			popup: imageDownload,
			onClick: handleDownloadAsImage,
		},
	];

	return (
		<div>
			{bottomMenus.map(({ icon, popup, onClick }, idx) =>
				<Div key={idx} onClick={onClick}>
					<BubblePopup isOpen={popup.isOpen} message={popup.message} />
					<IconButton isHover={true} icon={icon} hoverColor={themeColor.white} />
				</Div>,
			)}
		</div>
	);
}
