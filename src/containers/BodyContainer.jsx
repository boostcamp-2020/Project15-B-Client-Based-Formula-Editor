import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLatexInputWithDebounce, setLatexTextInputWithDebounce, setCursorPosition } from "../slice";

import { getLocalStorage } from "../sliceUtil";
import FontContainer from "./FontContainer";
import ControlButtonContainer from "./ControlButtonContainer";
import BodyLayout from "../layouts/BodyLayout";
import EditTabHeaderLayout from "../layouts/EditTabHeaderLayout";
import FormulaRepresentation from "../presentationals/FormulaRepresentation";
import LatexRepresentation from "../presentationals/LatexRepresentation";
import DynamicBar from "../presentationals/DynamicBar";

import { latexFunction, toFitSimple } from "../util";
import DropdownWrapper from "../layouts/DropdownWrapper";

export default function BodyContainer() {
	let startPageY;
	let endPageY;
	const SUM_OF_OTHER_COMPONENTS_HEIGHT = 113;
	const MIN_HEIGHT = 100;
	const initialFormula = (window.innerHeight - SUM_OF_OTHER_COMPONENTS_HEIGHT) / MIN_HEIGHT * 60;
	const initialLatex = (window.innerHeight - SUM_OF_OTHER_COMPONENTS_HEIGHT) / MIN_HEIGHT * 40;
	const maxHeight = initialFormula + initialLatex;
	const [heights, setHeights] = useState({ formula: initialFormula, latex: initialLatex });
	const [rateOfFormulaHeight, setRateOfFormulaHeight] = useState(60);
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

		const root = document.querySelector(".mq-editable-field > .mq-root-block");
		const cursor = root.querySelector(".mq-cursor");

		if (!cursor) return;

		const [{ x, y }] = cursor.getClientRects();

		dispatch(setCursorPosition({ x, y }));
	};

	const setUpLatexInsertFunction = mathField => {
		latexFunction.insertLatex = latex => {
			mathField.write(latex);
		};
	};

	const handleLatexTextarea = e => {
		dispatch(setLatexTextInputWithDebounce(e.target.value));
	};

	const handleDragStart = e => {
		startPageY = e.pageY;
	};

	const handleDrop = e => {
		endPageY = e.pageY;
		const sub = startPageY - endPageY;
		let expectedFormulaHeight;
		let	expectedLatexHeight;

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

	useEffect(() => {
		const eventFunc = toFitSimple(resizeEvent(rateOfFormulaHeight));

		window.addEventListener("resize", eventFunc);
		return () => {
			window.removeEventListener("resize", eventFunc);
		};
	});

	const preventDefault = e => e.preventDefault();

	return (
		<BodyLayout>
			<EditTabHeaderLayout>
				<FontContainer />
				<ControlButtonContainer />
			</EditTabHeaderLayout>
			<DropdownWrapper onDrop={handleDrop} onDragOver={preventDefault}>
				<FormulaRepresentation
					height={heights.formula}
					latexInput={latexInput}
					onChange={handleLatexInput}
					mathquillDidMount={setUpLatexInsertFunction}
					fontInfo={fontInfo}
					alignInfo={alignInfo}
				/>
				{/* <div> */}
				{/* <DynamicBar onMouseDown={handleMouseDown}/> */}
				<DynamicBar onDrag={preventDefault} onDragStart={handleDragStart} />
				<LatexRepresentation
					height={heights.latex}
					latexInput={latexInput}
					onChange={handleLatexTextarea}
				/>
				{/* </div> */}
			</DropdownWrapper>
		</BodyLayout>
	);
}
