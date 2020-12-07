import React from "react";
import styled from "styled-components";

import { themeColor } from "../GlobalStyle";
import { RECENT_TAB, BOOKMARK_TAB, CUSTOM_COMMAND_TAB } from "../constants/sidebarTab";
import TimeIcon from "../icons/TimeIcon";
import EmptyStarIcon from "../icons/EmptyStarIcon";
import CustomIcon from "../icons/CustomIcon";
import IconButton from "../presentationals/IconButton";

const TabLayout = styled.div`
	background-color: ${themeColor.light};
	padding: 20px 10px;
`;

const Tab = styled.div`
	margin: 12px 0;
	
	svg {
		fill: ${(({ isSelected }) => (isSelected ? `${themeColor.white}` : `${themeColor.superLight}`))}
	}
`;

export default function SideBarTab({ currentTab, onClick, isScrollTop }) {
	const tabMenus = [
		<TimeIcon key={RECENT_TAB}/>,
		<EmptyStarIcon key={BOOKMARK_TAB}/>,
		<CustomIcon key={CUSTOM_COMMAND_TAB}/>,
	];

	return (
		<TabLayout isScrollTop={isScrollTop}>
			{tabMenus.map((tabMenu, index) =>
				<Tab onClick={onClick(index)} key={index} isSelected={currentTab === index}>
					<IconButton isHover={currentTab !== index} icon={tabMenu} />
				</Tab>,
			)}
		</TabLayout>
	);
}
