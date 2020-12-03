import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setAlign, setFont } from "../slice";
import AlignLeftIcon from "../icons/AlignLeftIcon";
import AlignCenterIcon from "../icons/AlignCenterIcon";
import AlignRightIcon from "../icons/AlignRightIcon";
import FontContainerLayout from "../layouts/FontContainerLayout";
import FontColorSelector from "../presentationals/FontColorSelector";
import FontSizeSelector from "../presentationals/FontSizeSelector";
import IconButton from "../presentationals/IconButton";

export default function FontContainer() {
	const fontInfo = useSelector(state => state.fontInfo);
	const dispatch = useDispatch();

	const handleFontSize = e => {
		dispatch(setFont({ ...fontInfo, size: e.target.value }));
	};
	const handleFontColor = e => {
		dispatch(setFont({ ...fontInfo, color: e.target.value }));
	};

	const handleAlignment = align => () => {
		dispatch(setAlign(align));
	};

	return (
		<FontContainerLayout>
			<FontSizeSelector onChange={handleFontSize} fontSize={fontInfo.size} />
			<FontColorSelector onChange={handleFontColor} fontColor={fontInfo.color} />
			<IconButton onClick={handleAlignment("left")} icon={<AlignLeftIcon />} isHover={true} />
			<IconButton onClick={handleAlignment("center")} icon={<AlignCenterIcon />} isHover={true} />
			<IconButton onClick={handleAlignment("right")} icon={<AlignRightIcon />} isHover={true} />
		</FontContainerLayout>
	);
}
