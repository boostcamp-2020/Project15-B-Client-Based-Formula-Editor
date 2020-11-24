import React from "react";

import EditTabButton from "../presentationals/EditTabButton";
import EditTabHeaderLayout from "../layouts/EditTabHeaderLayout";
import FontContainer from "./FontContainer";
import ControlButtonContainer from "./ControlButtonContainer";
import FormulaRepresentation from "../presentationals/FormulaRepresentation";
import LatexRepresentation from "../presentationals/LatexRepresentation";
import BodyLayout from "../layouts/BodyLayout";

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
