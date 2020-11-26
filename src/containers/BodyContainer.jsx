import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { setControlLatexCommand } from "../slice";

import FontContainer from "./FontContainer";
import ControlButtonContainer from "./ControlButtonContainer";
import BodyLayout from "../layouts/BodyLayout";
import EditTabHeaderLayout from "../layouts/EditTabHeaderLayout";
import EditTabButton from "../presentationals/EditTabButton";
import FormulaRepresentation from "../presentationals/FormulaRepresentation";
import LatexRepresentation from "../presentationals/LatexRepresentation";

export default function BodyContainer() {
	const dispatch = useDispatch();
	const {
		presentLatexCommand,
		pastLatexCommands,
	} = useSelector(state => state);

	const onChange = ({ target }) => {
		const newState = {
			pastLatexCommands: [presentLatexCommand, ...pastLatexCommands],
			presentLatexCommand: target.value,
		};

		dispatch(setControlLatexCommand(newState));
	};

	return (
		<BodyLayout>
			<EditTabButton />
			<EditTabHeaderLayout>
				<FontContainer />
				<ControlButtonContainer />
			</EditTabHeaderLayout>
			<FormulaRepresentation />
			<LatexRepresentation value={presentLatexCommand} onChange={onChange}/>
		</BodyLayout>
	);
}
