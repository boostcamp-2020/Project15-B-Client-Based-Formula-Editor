import React, { useState } from "react";

import { throttle, calcCurrentXRatio } from "../util";
import { INIT_SIDE_WIDTH } from "../constants/size";
import BodyContainer from "./BodyContainer";
import FooterContainer from "./FooterContainer";
import SideBar from "./SideBar";
import MainLayout from "../layouts/MainLayout";
import MainContentWrapper from "../layouts/MainContentWrapper";
import DynamicBarHorizontal from "../presentationals/DynamicBarHorizontal";

export default function MainContainer() {
	const initValue = calcCurrentXRatio(INIT_SIDE_WIDTH);
	const [isMove, setIsMove] = useState(false);
	const [divLeft, setDivLeft] = useState(initValue);
	const [sidebarWidth, setSidebarWidth] = useState(initValue);
	const bodyWidth = 100 - sidebarWidth;

	const handleMouseDown = e => {
		setIsMove(true);
		setDivLeft(e.pageX);
	};

	const handleMouseMove = e => {
		const left = calcCurrentXRatio(e.pageX);

		setDivLeft(left);
	};

	const handleMouseUp = e => {
		const left = calcCurrentXRatio(e.pageX);

		setDivLeft(left);
		setSidebarWidth(left);
		setIsMove(false);
	};

	return (
		<MainLayout
			onMouseMove={isMove ? throttle(handleMouseMove, 100) : undefined}
			onMouseUp={isMove ? handleMouseUp : undefined}
		>
			<SideBar sidebarWidth={sidebarWidth} />
			<DynamicBarHorizontal
				isMove={isMove}
				onMouseDown={handleMouseDown}
				divLeft={divLeft}
			/>
			<MainContentWrapper bodyWidth={bodyWidth}>
				<FooterContainer />
				<BodyContainer />
			</MainContentWrapper>
		</MainLayout>
	);
}
