import React, { useState } from "react";

import TutorialMain from "../presentationals/TutorialMain";

const BASE_TRANSFORM_Y = -750;
const TRANSFORM_DIFFERENCE = 106.5;
const MAX_DIFFERENCE = 100000;

export default function TutorialContainer() {
	const [slide, setSlide] = useState(BASE_TRANSFORM_Y);
	const isTutorialDone = localStorage.getItem("isTutorialDone");

	if (isTutorialDone) {
		return null;
	}

	const handleSlideDown = () => {
		setSlide(slide - TRANSFORM_DIFFERENCE);
	};

	const handleSlideUp = () => {
		setSlide(slide + TRANSFORM_DIFFERENCE);
	};

	const handleSlideEnd = () => {
		setSlide(slide - MAX_DIFFERENCE);
		localStorage.setItem("isTutorialDone", true);
	};

	return (
		<TutorialMain
			slide={slide}
			handleSlideUp={handleSlideUp}
			handleSlideDown={handleSlideDown}
			handleSlideEnd={handleSlideEnd}
		/>
	);
}
