import React from "react";
import styled from "styled-components";

import { themeColor } from "../GlobalStyle";
import { CHARACTER_TAB, RECENT_TAB, BOOKMARK_TAB, CUSTOM_COMMAND_TAB } from "../constants/sidebarTab";
import TimeIcon from "../icons/TimeIcon";
import EmptyStarIcon from "../icons/EmptyStarIcon";
import CustomIcon from "../icons/CustomIcon";
import PageIcon from "../icons/PageIcon";
import IconButton from "../presentationals/IconButton";

const Tab = styled.div`
	margin: 12px 0;
	
	svg {
		fill: ${(({ isSelected }) => (isSelected ? `${themeColor.white}` : `${themeColor.superLight}`))}
	}
`;

export default function SideTopTab({ currentTab, onClick }) {
	const tabMenus = [
		<PageIcon key={CHARACTER_TAB} />,
		<TimeIcon key={RECENT_TAB}/>,
		<EmptyStarIcon key={BOOKMARK_TAB}/>,
		<CustomIcon key={CUSTOM_COMMAND_TAB}/>,
	];

	return (
		<div>
			{tabMenus.map((tabMenu, index) => {
				const isSelected = currentTab === index;

				return (<Tab onClick={onClick(index, isSelected)} key={index} isSelected={isSelected}>
					<IconButton
						isHover={!isSelected}
						hoverColor={themeColor.white}
						icon={tabMenu}
					/>
				</Tab>);
			})}
		</div>
	);
}
