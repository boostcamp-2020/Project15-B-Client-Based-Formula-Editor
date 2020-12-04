import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLatexInputWithDebounce, setLatexTextInputWithDebounce } from "../slice";

import { getLocalStorage } from "../sliceUtil";
import FontContainer from "./FontContainer";
import ControlButtonContainer from "./ControlButtonContainer";
import BodyLayout from "../layouts/BodyLayout";
import EditTabHeaderLayout from "../layouts/EditTabHeaderLayout";
import EditTabButton from "../presentationals/EditTabButton";
import FormulaRepresentation from "../presentationals/FormulaRepresentation";
import LatexRepresentation from "../presentationals/LatexRepresentation";

import { latexFunction } from "../util";

export default function BodyContainer() {
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

	return (
		<BodyLayout>
			<EditTabButton />
			<EditTabHeaderLayout>
				<FontContainer />
				<ControlButtonContainer />
			</EditTabHeaderLayout>
			<FormulaRepresentation
				latexInput={latexInput}
				onChange={handleLatexInput}
				mathquillDidMount={setUpLatexInsertFunction}
				fontInfo={fontInfo}
				alignInfo={alignInfo}
			/>
			<LatexRepresentation
				latexInput={latexInput}
				onChange={handleLatexTextarea}
			/>
		</BodyLayout>
	);
}
