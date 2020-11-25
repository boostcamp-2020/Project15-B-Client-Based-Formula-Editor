import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { setPastLatexCommands, setPresentLatexCommand } from "../slice";

import FontContainer from "./FontContainer";
import ControlButtonContainer from "./ControlButtonContainer";
import BodyLayout from "../layouts/BodyLayout";
import EditTabHeaderLayout from "../layouts/EditTabHeaderLayout";
import EditTabButton from "../presentationals/EditTabButton";
import FormulaRepresentation from "../presentationals/FormulaRepresentation";
import LatexRepresentation from "../presentationals/LatexRepresentation";

export default function BodyContainer() {
	const dispatch = useDispatch();
	const presentLatexCommand = useSelector(state => state.presentLatexCommand);
	const pastLatexCommands = useSelector(state => state.pastLatexCommands);

	const onChange = ({ target }) => {
		dispatch(setPastLatexCommands([presentLatexCommand, ...pastLatexCommands]));
		dispatch(setPresentLatexCommand(target.value));
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
