/* eslint-disable array-element-newline */
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import FormulaButton from "../presentationals/FormulaButton";
import FormulaDropdownContainer from "../containers/FormulaDropdownContainer";
import ButtonMenuLayout from "../layouts/ButtonMenuLayout";
import { setCharacterButtonState, setOperatorButtonState, setFormulaButtonState } from "../slice";

export default function FormulaButtonContainer() {
	const dispatch = useDispatch();
	const { OperatorButtonState, CharacterButtonState, FormulaButtonState } =
		useSelector(state => state.ButtonState);

	const handleOperatorClick = () => {
		dispatch(setOperatorButtonState(!OperatorButtonState));
	};
	const handleChatacterClick = () => {
		dispatch(setCharacterButtonState(!CharacterButtonState));
	};
	const handleFormulaClick = () => {
		dispatch(setFormulaButtonState(!FormulaButtonState));
	};

	const ButtonsContent = [
		{ name: "연산자", onClick: handleOperatorClick, state: OperatorButtonState },
		{ name: "문자", onClick: handleChatacterClick, state: CharacterButtonState },
		{ name: "수식", onClick: handleFormulaClick, state: FormulaButtonState },
	];

	const Buttons = ButtonsContent.map((elem, index) => (
		<div key={`Div${index}`}>
			<FormulaButton key={`Btn${index}`} name={elem.name} onClick={elem.onClick} />
			{elem.state ?
				<FormulaDropdownContainer key={`DD${index}`} name={elem.name} /> :
				<div key={`none${index}`}></div>}
		</div>
	));

	return (<ButtonMenuLayout>{Buttons}</ButtonMenuLayout>);
}
