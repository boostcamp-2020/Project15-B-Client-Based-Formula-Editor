import React from "react";
import styled from "styled-components";

import { color } from "../GlobalStyle";
import { RECENT_TAB, BOOKMARK_TAB, CUSTOM_COMMAND_TAB } from "../constants/sidebarTab";
import TimeIcon from "../icons/TimeIcon";
import EmptyStarIcon from "../icons/EmptyStarIcon";
import CustomIcon from "../icons/CustomIcon";
import IconButton from "../presentationals/IconButton";

const TabLayout = styled.div`
	display: flex;
	justify-content: space-around;
	padding: 10px 0 3px 0;
	z-index: 1000;
	position: relative;
	box-shadow: ${({ isScrollTop }) => (isScrollTop ? "none" : "0 12px 15px -15px grey")};
	transition: 1s;
`;

const Tab = styled.div`
	${({ isSelected }) => (isSelected &&
		`
			button {
				cursor: default;
			}
			svg {
				fill: ${color.normal};	
			}
		`
	)}
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
