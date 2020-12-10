import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLatexInputWithDebounce, setLatexTextInputWithDebounce } from "../slice";

import { getLocalStorage } from "../sliceUtil";
import FontContainer from "./FontContainer";
import ControlButtonContainer from "./ControlButtonContainer";
import BodyLayout from "../layouts/BodyLayout";
import DropdownWrapper from "../layouts/DropdownWrapper";
import EditTabHeaderLayout from "../layouts/EditTabHeaderLayout";
import FormulaRepresentation from "../presentationals/FormulaRepresentation";
import LatexRepresentation from "../presentationals/LatexRepresentation";
import DynamicBar from "../presentationals/DynamicBar";
import GhostBar from "../presentationals/GhostBar";

import { latexFunction, throttle, toFitSimple } from "../util";

export default function BodyContainer() {
	const SUM_OF_OTHER_COMPONENTS_HEIGHT = 113;
	const MIN_HEIGHT = 100;
	const initialFormula = (window.innerHeight - SUM_OF_OTHER_COMPONENTS_HEIGHT) / MIN_HEIGHT * 60;
	const initialLatex = (window.innerHeight - SUM_OF_OTHER_COMPONENTS_HEIGHT) / MIN_HEIGHT * 40;
	const maxHeight = initialFormula + initialLatex;
	const [heights, setHeights] = useState({ formula: initialFormula, latex: initialLatex });
	const [rateOfFormulaHeight, setRateOfFormulaHeight] = useState(60);
	const [pageYValue, setPageYValue] = useState(0);
	const [isMove, setIsMove] = useState(false);
	const [ghostHeight, setGhostHeight] = useState(heights.formula);
	const dispatch = useDispatch();
	const {
		latexInput,
		fontInfo,
		alignInfo,
	} = useSelector(state => state);

	const handleLatexInput = mathField => {
		let mathFieldLatex = mathField.latex();
		const customList = getLocalStorage("customList", []);

		const target = customList.find(elem => mathFieldLatex.includes(`#${elem.command}\\`));

		if (target) {
			mathFieldLatex = mathFieldLatex.replace(`#${target.command}\\`, target.latex);
		}
		dispatch(setLatexInputWithDebounce(mathFieldLatex));
	};

	const setUpLatexInsertFunction = mathField => {
		latexFunction.insertLatex = latex => {
			mathField.write(latex);
		};
	};

	const handleLatexTextarea = e => {
		dispatch(setLatexTextInputWithDebounce(e.target.value));
	};

	const handleMouseDown = e => {
		setIsMove(true);
		setPageYValue(e.pageY);
		setGhostHeight(e.pageY - 100);
	};

	const handleMouseUp = e => {
		if (isMove) {
			setIsMove(false);

			const sub = pageYValue - e.pageY;

			let expectedFormulaHeight;
			let expectedLatexHeight;

			if (heights.formula - sub < MIN_HEIGHT) {
				expectedFormulaHeight = MIN_HEIGHT;
				expectedLatexHeight = maxHeight - MIN_HEIGHT;
			} else if (heights.latex + sub < MIN_HEIGHT) {
				expectedLatexHeight = MIN_HEIGHT;
				expectedFormulaHeight = maxHeight - MIN_HEIGHT;
			} else {
				expectedFormulaHeight = heights.formula - sub;
				expectedLatexHeight = heights.latex + sub;
			}

			const rate = expectedFormulaHeight / (window.innerHeight - SUM_OF_OTHER_COMPONENTS_HEIGHT) * 100;

			setRateOfFormulaHeight(rate);

			setHeights({
				formula: expectedFormulaHeight,
				latex: expectedLatexHeight,
			});
			setGhostHeight(heights.formula);
		}
	};

	const resizeEvent = rate => () => {
		const allowedHeight = window.innerHeight - SUM_OF_OTHER_COMPONENTS_HEIGHT;
		let expectedFormulaHeight = allowedHeight / 100 * rate;
		let expectedLatexHeight = allowedHeight / 100 * (100 - rate);

		if (expectedFormulaHeight < 100) {
			expectedLatexHeight -= 100 - expectedFormulaHeight;
		}

		if (expectedLatexHeight < 100) {
			expectedFormulaHeight -= 100 - expectedLatexHeight;
		}

		const changedHeight = {
			formula: expectedFormulaHeight > 100 ? expectedFormulaHeight : 100,
			latex: expectedLatexHeight > 100 ? expectedLatexHeight : 100,
		};

		setHeights(changedHeight);
	};

	const handleMouseMove = e => {
		if (isMove) {
			setGhostHeight(e.pageY - 100);
		}
	};

	useEffect(() => {
		const eventFunc = toFitSimple(resizeEvent(rateOfFormulaHeight));

		if (isMove) {
			window.addEventListener("mouseup", handleMouseUp);
		}
		window.addEventListener("resize", eventFunc);
		return () => {
			window.removeEventListener("mouseup", handleMouseUp);
			window.removeEventListener("resize", eventFunc);
		};
	});

	return (
		<BodyLayout>
			<EditTabHeaderLayout>
				<FontContainer />
				<ControlButtonContainer />
			</EditTabHeaderLayout>
			<DropdownWrapper onMouseMove={throttle(handleMouseMove, 100)} >
				<FormulaRepresentation
					height={heights.formula}
					latexInput={latexInput}
					onChange={handleLatexInput}
					mathquillDidMount={setUpLatexInsertFunction}
					fontInfo={fontInfo}
					alignInfo={alignInfo}
				/>
				{isMove && <GhostBar ghostHeight={ghostHeight} />}
				<DynamicBar onMouseDown={handleMouseDown} top={heights.formula} />
				<LatexRepresentation
					height={heights.latex}
					latexInput={latexInput}
					onChange={handleLatexTextarea}
				/>
			</DropdownWrapper>
		</BodyLayout>
	);
}
