import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setAlign, setFont } from "../slice";
import AlignLeftIcon from "../icons/alignLeftIcon";
import AlignCenterIcon from "../icons/alignCenterIcon";
import AlignRightIcon from "../icons/alignRightIcon";
import FontContainerLayout from "../layouts/FontContainerLayout";
import FontColorSelector from "../presentationals/FontColorSelector";
import FontSizeSelector from "../presentationals/FontSizeSelector";
import EditTabHeaderButton from "../presentationals/EditTabHeaderButton";

export default function FontContainer() {
	const fontInfo = useSelector(state => state.fontInfo);
	const dispatch = useDispatch();

	const handleFontSize = e => {
		dispatch(setFont({ color: fontInfo.color, size: e.target.value }));
	};
	const handleFontColor = e => {
		dispatch(setFont({ color: e.target.value, size: fontInfo.size }));
	};

	const handleAlignment = align => () => {
		dispatch(setAlign(align));
	};

	return (
		<FontContainerLayout>
			<FontSizeSelector fontSize={fontInfo.size} onChange={handleFontSize} />
			<FontColorSelector onChange={handleFontColor} fontColor={fontInfo.color} />
			<EditTabHeaderButton onClick={handleAlignment("left")} icon={<AlignLeftIcon />} />
			<EditTabHeaderButton onClick={handleAlignment("center")} icon={<AlignCenterIcon />} />
			<EditTabHeaderButton onClick={handleAlignment("right")} icon={<AlignRightIcon />} />
		</FontContainerLayout>
	);
}
