import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { toggleIsTutorialOn } from "../slice";
import TutorialMain from "../presentationals/TutorialMain";

const BROWSER_WIDTH = window.innerWidth;

export default function TutorialContainer() {
	const dispatch = useDispatch();
	const [browserWidth, setBrowserWidth] = useState(BROWSER_WIDTH);
	const [slide, setSlide] = useState(0);
	const isTutorialOn = useSelector(state => state.isTutorialOn);
	const theme = useSelector(state => state.theme);

	if (!isTutorialOn) {
		return null;
	}

	const handleSlideDown = () => {
		setSlide(slide - browserWidth);
	};

	const handleSlideUp = () => {
		setSlide(slide + browserWidth);
	};

	const handleSlideEnd = () => {
		setSlide(0);
		dispatch(toggleIsTutorialOn(false));
	};

	useEffect(() => {
		const resizeEvent = () => {
			setBrowserWidth(window.innerWidth);
		};

		window.addEventListener("resize", resizeEvent);
		return () => window.removeEventListener("resize", resizeEvent);
	});

	return (
		<TutorialMain
			browserWidth={browserWidth}
			slide={slide}
			handleSlideUp={handleSlideUp}
			handleSlideDown={handleSlideDown}
			handleSlideEnd={handleSlideEnd}
			theme={theme}
		/>
	);
}
