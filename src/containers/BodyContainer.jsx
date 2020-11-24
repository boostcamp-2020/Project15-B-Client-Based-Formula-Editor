import React from "react";

import EditTabButton from "../presentationals/EditTabButton";
import EditTabHeaderStyle from "../layouts/EditTabHeaderLayout";
import FontContainer from "./FontContainer";

export default function BodyContainer() {
	return (
		<div>
			<EditTabButton />
			<EditTabHeaderStyle>
				<FontContainer />
				{/* 리두 언두 */}
			</EditTabHeaderStyle>
			{/* 수식 공간 */}
			{/* 라텍 공간 */}
		</div>);
}
