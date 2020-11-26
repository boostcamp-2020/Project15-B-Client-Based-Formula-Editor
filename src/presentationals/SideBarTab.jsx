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
	padding-top: 10px;
	z-index: 1000;
	position: relative;
	${({ isScrollTop }) => (!isScrollTop && "box-shadow: 0 12px 15px -15px grey;")}
`;

const Tab = styled.div`
	${({ isSelected }) => (isSelected &&
		`
			border-bottom: 3px solid ${color.normal};
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
	const tabMenus = [<TimeIcon key="0"/>, <EmptyStarIcon key="1"/>, <CustomIcon key="2"/>];

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
