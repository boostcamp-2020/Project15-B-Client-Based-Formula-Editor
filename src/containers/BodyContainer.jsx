import React from "react";

import FontContainer from "./FontContainer";
import ControlButtonContainer from "./ControlButtonContainer";
import BodyLayout from "../layouts/BodyLayout";
import EditTabHeaderLayout from "../layouts/EditTabHeaderLayout";
import EditTabButton from "../presentationals/EditTabButton";
import FormulaRepresentation from "../presentationals/FormulaRepresentation";
import LatexRepresentation from "../presentationals/LatexRepresentation";

export default function BodyContainer() {
	return (
		<BodyLayout>
			<EditTabButton />
			<EditTabHeaderLayout>
				<FontContainer />
				<ControlButtonContainer />
			</EditTabHeaderLayout>
			<FormulaRepresentation />
			<LatexRepresentation />
		</BodyLayout>
	);
}
