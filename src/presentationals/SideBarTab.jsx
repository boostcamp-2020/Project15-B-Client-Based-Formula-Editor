import React from "react";
import styled from "styled-components";

import { color } from "../GlobalStyle";
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

const SelectedTabBorderBottom = styled.div`
	width: 42px;
	height: 3px;
	background-color: ${color.normal};
	position: absolute;
	left: ${({ currentTab }) => (currentTab * 90) + 24}px;
	top: 47px;
	transition: 0.3s;
`;

export default function SideBarTab({ currentTab, onClick, isScrollTop }) {
	const tabMenus = [<TimeIcon key="0"/>, <EmptyStarIcon key="1"/>, <CustomIcon key="2"/>];

	return (
		<TabLayout isScrollTop={isScrollTop}>
			<SelectedTabBorderBottom currentTab={currentTab} />
			{tabMenus.map((tabMenu, index) =>
				<Tab onClick={onClick(index)} key={index} isSelected={currentTab === index}>
					<IconButton isHover={currentTab !== index} icon={tabMenu} />
				</Tab>,
			)}
		</TabLayout>
	);
}
