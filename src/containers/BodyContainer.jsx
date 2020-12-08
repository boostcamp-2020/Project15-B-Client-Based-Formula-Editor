import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLatexInputWithDebounce, setLatexTextInputWithDebounce } from "../slice";

import { getLocalStorage } from "../sliceUtil";
import FontContainer from "./FontContainer";
import ControlButtonContainer from "./ControlButtonContainer";
import BodyLayout from "../layouts/BodyLayout";
import EditTabHeaderLayout from "../layouts/EditTabHeaderLayout";
import FormulaRepresentation from "../presentationals/FormulaRepresentation";
import LatexRepresentation from "../presentationals/LatexRepresentation";
import DynamicBar from "../presentationals/DynamicBar";

import { latexFunction } from "../util";
import DropdownWrapper from "../layouts/DropdownWrapper";

export default function BodyContainer() {
	let startPageY;
	let endPageY;
	const SUM_OF_OTHER_COMPONENTS_HEIGHT = 113;
	const MIN_HEIGHT = 100;
	const initFormula = (window.innerHeight - SUM_OF_OTHER_COMPONENTS_HEIGHT) / MIN_HEIGHT * 60;
	const initLatex = (window.innerHeight - SUM_OF_OTHER_COMPONENTS_HEIGHT) / MIN_HEIGHT * 40;
	const maxHeight = initFormula + initLatex;
	const [heights, setHeights] = useState({ formula: initFormula, latex: initLatex });
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

		setHeights({
			formula: expectedFormulaHeight,
			latex: expectedLatexHeight,
		});
	};

	const resizeEvent = () => {
		const changedHeight = {
			formula: (window.innerHeight - SUM_OF_OTHER_COMPONENTS_HEIGHT) / 100 * 60,
			latex: (window.innerHeight - SUM_OF_OTHER_COMPONENTS_HEIGHT) / 100 * 40,
		};

		setHeights(changedHeight);
	};

	useEffect(() => {
		window.addEventListener("resize", resizeEvent);
		return () => {
			window.removeEventListener("resize", resizeEvent);
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
				<DynamicBar onDrag={preventDefault} onDragStart={handleDragStart} />
				<LatexRepresentation
					height={heights.latex}
					latexInput={latexInput}
					onChange={handleLatexTextarea}
				/>
			</DropdownWrapper>
		</BodyLayout>
	);
}
