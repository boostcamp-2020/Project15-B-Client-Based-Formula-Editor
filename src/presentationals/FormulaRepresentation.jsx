import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { addStyles, EditableMathField } from "react-mathquill";

import { setLatexInput, setMathField } from "../slice";

addStyles();

const FormulaRepresentationStyle = styled.div`
  height: 300px;
  border: 1px solid black;
	display: flex;
	flex-direction: row;
`;

export default function FormulaRepresentation() {
	const dispatch = useDispatch();
	const latexInput = useSelector(state => state.mathquill.latexInput);

	const handleLatexInput = mathField => {
		dispatch(setLatexInput(mathField.latex()));
		dispatch(setMathField(mathField));
	};

	return (
		<FormulaRepresentationStyle>
			<EditableMathField
				latex={latexInput}
				onChange={handleLatexInput}
			/>
		</FormulaRepresentationStyle>
	);
}
