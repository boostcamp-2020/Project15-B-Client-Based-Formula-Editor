import React from "react";
import styled from "styled-components";

import EditTabHeaderButton from "../presentationals/EditTabHeaderButton";

export default function ControlButtonContainer(params) {
	const handleUndoButton = () => {
		console.log("clicked undo");
	};
	const handleRedoButton = () => {
		console.log("clicked redo");
	};
	const handleResetButton = () => {
		console.log("clicked reset");
	};

	return (
		<div>
			<EditTabHeaderButton onClick={handleUndoButton} />
			<EditTabHeaderButton onClick={handleRedoButton} />
			<EditTabHeaderButton onClick={handleResetButton} />
		</div>
	);
}
