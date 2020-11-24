import React from "react";

import EditTabButton from "../presentationals/EditTabButton";
import EditTabHeaderLayout from "../layouts/EditTabHeaderLayout";
import FontContainer from "./FontContainer";
import ControlButtonContainer from "./ControlButtonContainer";
import FormulaRepresentation from "../presentationals/FormulaRepresentation";

export default function BodyContainer() {
	return (
		<div>
			<EditTabButton />
			<EditTabHeaderLayout>
				<FontContainer />
				<ControlButtonContainer />
			</EditTabHeaderLayout>
				<FormulaRepresentation />
			</div>
}
