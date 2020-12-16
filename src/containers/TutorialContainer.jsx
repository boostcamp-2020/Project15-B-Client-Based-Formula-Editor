import React, { useState } from "react";

import TutorialMain from "../presentationals/TutorialMain";

const BASE_TRANSFORM_Y = -750;
const TRANSFORM_DIFFERENCE = 106.5;

export default function TutorialContainer() {
	const [slide, setSlide] = useState(BASE_TRANSFORM_Y);
	const idTutorialDone = localStorage.getItem("tutorial");

	if (idTutorialDone) {
		return null;
	}

	const handleSlideDown = additional => () => {
		setSlide(slide - TRANSFORM_DIFFERENCE - additional);
	};

	const handleSlideUp = () => {
		setSlide(slide + TRANSFORM_DIFFERENCE);
	};

	return (
		<TutorialMain
			slide={slide}
			handleSlideUp={handleSlideUp}
			handleSlideDown={handleSlideDown}
		/>
	);
}
