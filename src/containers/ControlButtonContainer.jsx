import React from "react";
import { useDispatch } from "react-redux";

import { redoEvent, undoEvent, resetEvent } from "../slice";
import EditTabHeaderButton from "../presentationals/EditTabHeaderButton";

export default function ControlButtonContainer(params) {
	const dispatch = useDispatch();

	const handleUndoButton = () => dispatch(undoEvent());
	const handleRedoButton = () => dispatch(redoEvent());
	const handleResetButton = () => dispatch(resetEvent());

	return (
		<div>
			<EditTabHeaderButton onClick={handleUndoButton} />
			<EditTabHeaderButton onClick={handleRedoButton} />
			<EditTabHeaderButton onClick={handleResetButton} />
		</div>
	);
}
