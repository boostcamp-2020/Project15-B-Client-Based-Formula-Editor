import React, { useState, useEffect } from "react";

import TutorialMain from "../presentationals/TutorialMain";

const BROWSER_WIDTH = window.innerWidth;
const MAX_DIFFERENCE = 100000;

export default function TutorialContainer() {
	const [browserWidth, setBrowserWidth] = useState(BROWSER_WIDTH);
	const [slide, setSlide] = useState(0);
	const isTutorialDone = localStorage.getItem("isTutorialDone");

	if (isTutorialDone) {
		return null;
	}

	const handleSlideDown = () => {
		setSlide(slide - browserWidth);
	};

	const handleSlideUp = () => {
		setSlide(slide + browserWidth);
	};

	const handleSlideEnd = () => {
		setSlide(slide - MAX_DIFFERENCE);
		localStorage.setItem("isTutorialDone", true);
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
		/>
	);
}
