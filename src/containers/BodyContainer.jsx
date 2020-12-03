import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLatexInputWithDebounce, setLatexTextInputWithDebounce } from "../slice";

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
		customCommandList,
	} = useSelector(state => state);

	const handleLatexInput = customList => mathField => {
		const mathFieldLatex = mathField.latex();
		const target = customList.find(elem => mathFieldLatex.includes(`#${elem.command}\\`));

		if (target) {
			dispatch(setLatexInputWithDebounce(mathFieldLatex.replace(`#${target.command}\\`, target.latex)));
			return;
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
				onChange={handleLatexInput(customCommandList)}
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
