import React, { useState } from "react";

import TutorialMain from "../presentationals/TutorialMain";

const BROWSER_WIDTH = window.innerWidth;
const MAX_DIFFERENCE = 100000;

export default function TutorialContainer() {
	const [slide, setSlide] = useState(0);
	const isTutorialDone = localStorage.getItem("isTutorialDone");

	if (isTutorialDone) {
		return null;
	}

	const handleSlideDown = () => {
		setSlide(slide - BROWSER_WIDTH);
	};

	const handleSlideUp = () => {
		setSlide(slide + BROWSER_WIDTH);
	};

	const handleSlideEnd = () => {
		setSlide(slide - MAX_DIFFERENCE);
		localStorage.setItem("isTutorialDone", true);
	};

	return (
		<TutorialMain
			browserWidth={BROWSER_WIDTH}
			slide={slide}
			handleSlideUp={handleSlideUp}
			handleSlideDown={handleSlideDown}
			handleSlideEnd={handleSlideEnd}
		/>
	);
}
