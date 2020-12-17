import React, { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setAlign, setFont } from "../slice";
import AlignLeftIcon from "../icons/AlignLeftIcon";
import AlignCenterIcon from "../icons/AlignCenterIcon";
import AlignRightIcon from "../icons/AlignRightIcon";
import FontContainerLayout from "../layouts/FontContainerLayout";
import FontColorSelector from "../presentationals/FontColorSelector";
import FontSizeSelector from "../presentationals/FontSizeSelector";
import IconButton from "../presentationals/IconButton";

function FontContainer() {
	const fontSizeRef = useRef();
	const fontColorRef = useRef();
	const [fontSizeForView, setFontSizeForView] = useState(20);
	const [fontDropdown, setFontDropdown] = useState({ size: false, color: false });
	const fontInfo = useSelector(state => state.fontInfo);
	const dispatch = useDispatch();

	const handleFontSizeChange = useCallback(e => {
		const MAX_FONT_SIZE = 99;

		const value = Number(e.target.value) || "";
		const size = value < MAX_FONT_SIZE ? value : MAX_FONT_SIZE;

		setFontSizeForView(size);
		if (!size) return;
		dispatch(setFont({ ...fontInfo, size }));
	}, []);

	const handleFontSizeItemClick = useCallback(size => () => {
		setFontSizeForView(size);
		dispatch(setFont({ ...fontInfo, size }));
	}, []);

	const handleFontSizeInputClick = useCallback(() => {
		setFontDropdown({ ...fontDropdown, size: true });
	}, []);

	const handleFontColorChange = e => {
		dispatch(setFont({ ...fontInfo, color: e.target.value }));
	};

	const handleFontColorClick = color => () => {
		dispatch(setFont({ ...fontInfo, color }));
	};

	const handleFontButtonClick = () => {
		setFontDropdown({ ...fontDropdown, color: !fontDropdown.color });
	};

	const handleAlignment = align => () => {
		dispatch(setAlign(align));
	};

	useEffect(() => {
		const outsideClickEvent = ({ target }) => {
			if (!fontSizeRef.current.contains(target)) {
				setFontDropdown(prevState => ({ ...prevState, size: false }));
			}

			if (!fontColorRef.current.contains(target)) {
				setFontDropdown(prevState => ({ ...prevState, color: false }));
			}
		};

		if (fontDropdown.size || fontDropdown.color) {
			window.addEventListener("click", outsideClickEvent);
			return () => window.removeEventListener("click", outsideClickEvent);
		}
	});

	return (
		<FontContainerLayout>
			<FontSizeSelector
				fontSizeRef={fontSizeRef}
				fontSize={fontInfo.size}
				fontSizeForView={fontSizeForView}
				fontDropdown={fontDropdown}
				handleFontSizeChange={handleFontSizeChange}
				handleFontSizeItemClick={handleFontSizeItemClick}
				handleFontSizeInputClick={handleFontSizeInputClick}
			/>
			<FontColorSelector
				fontColorRef={fontColorRef}
				fontColor={fontInfo.color}
				fontDropdown={fontDropdown}
				onChange={handleFontColorChange}
				onClickItem={handleFontColorClick}
				onClickButton={handleFontButtonClick}
			/>
			<IconButton
				onClick={handleAlignment("left")}
				icon={<AlignLeftIcon />}
				isHover={true} />
			<IconButton
				onClick={handleAlignment("center")}
				icon={<AlignCenterIcon />}
				isHover={true} />
			<IconButton
				onClick={handleAlignment("right")}
				icon={<AlignRightIcon />}
				isHover={true} />
		</FontContainerLayout>
	);
}

export default React.memo(FontContainer);
