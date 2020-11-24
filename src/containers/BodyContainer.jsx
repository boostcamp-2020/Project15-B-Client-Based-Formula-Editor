import React from "react";

import EditTabButton from "../presentationals/EditTabButton";
import EditTabHeaderLayout from "../layouts/EditTabHeaderLayout";
import FontContainer from "./FontContainer";
import ControlButtonContainer from "./ControlButtonContainer";

export default function BodyContainer() {
	return (
		<div>
			<EditTabButton />
			<EditTabHeaderLayout>
				<FontContainer />
				<ControlButtonContainer />
			</EditTabHeaderLayout>
			</div>
}
