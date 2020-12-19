import React from "react";
import styled from "styled-components";

import color from "../constants/color";
import HelpIcon from "../icons/HelpIcon";
import SaveIcon from "../icons/SaveIcon";
import ShareIcon from "../icons/ShareIcon";
import ImageFileIcon from "../icons/ImageFileIcon";
import IconButton from "../presentationals/IconButton";
import BubblePopup from "../presentationals/BubblePopup";

const Div = styled.div`
	margin: 12px 0;

	svg {
		fill: ${({ theme }) => color.mainTheme1[theme]};
	}
`;

function SideBottomTab({
	tutorial,
	imageDownload,
	linkCopy,
	formulaSave,
	handleOpenTutorial,
	handleSaveFormula,
	handleCopyLink,
	handleDownloadAsImage,
	theme,
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
				<Div key={idx} onClick={onClick} theme={theme}>
					<BubblePopup isOpen={popup.isOpen} message={popup.message} theme={theme} />
					<IconButton isHover={true} icon={icon} hoverColor={color.mainTheme0[theme]} />
				</Div>,
			)}
		</div>
	);
}

export default React.memo(SideBottomTab);
