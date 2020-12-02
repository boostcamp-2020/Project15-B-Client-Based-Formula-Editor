import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLatexInput, setLatexTextInput } from "../slice";

import FontContainer from "./FontContainer";
import ControlButtonContainer from "./ControlButtonContainer";
import BodyLayout from "../layouts/BodyLayout";
import EditTabHeaderLayout from "../layouts/EditTabHeaderLayout";
import EditTabButton from "../presentationals/EditTabButton";
import FormulaRepresentation from "../presentationals/FormulaRepresentation";
import LatexRepresentation from "../presentationals/LatexRepresentation";

import { latexFunction, CUSTOM_LIST, getLocalStorage } from "../util";

export default function BodyContainer() {
	const dispatch = useDispatch();
	const {
		latexInput,
		fontInfo,
		alignInfo,
	} = useSelector(state => state);
	const customCommandList = getLocalStorage(CUSTOM_LIST, []);

	const handleLatexInput = mathField => {
		const mathFieldLatex = mathField.latex();
		const target = customCommandList.find(elem => mathFieldLatex.includes(elem.command));

		if (target !== undefined) {
			dispatch(setLatexInput(mathFieldLatex.replace(target.command, target.latex)));
			return;
		}
		dispatch(setLatexInput(mathFieldLatex));
	};


	const setUpLatexInsertFunction = mathField => {
		latexFunction.insertLatex = latex => {
			mathField.write(latex);
		};
	};

	const handleLatexTextarea = e => {
		dispatch(setLatexTextInput(e.target.value));
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
				handleLatexInput={handleLatexInput}
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
