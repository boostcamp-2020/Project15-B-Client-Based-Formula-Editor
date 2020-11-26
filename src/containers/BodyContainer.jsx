import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setControlLatexCommand, setLatexInput } from "../slice";

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
		pastLatexCommands,
	} = useSelector(state => state);

	const onChange = ({ target }) => {
		const newState = {
			pastLatexCommands: [latexInput, ...pastLatexCommands],
			latexInput: target.value,
		};

		dispatch(setControlLatexCommand(newState));
	};

	const handleLatexInput = mathField => {
		dispatch(setLatexInput(mathField.latex()));
	};

	const setUpLatexInsertFunction = mathField => {
		latexFunction.insertLatex = latex => {
			mathField.write(latex);
		};
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
			/>
		</BodyLayout>
	);
}
