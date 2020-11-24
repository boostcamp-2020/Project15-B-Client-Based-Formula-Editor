import React from "react";

import FormulaDropdownLayout from "../layouts/FormulaDropdownLayout";
import DropdownItem from "../presentationals/DropdownItem";

export default function FormulaDropdownCotainer({ name }) {
	const DropdonwItemList = {
		"연산자": ["+", "-", "=", "연", "산", "자", "입", "니", "더", "추", "가", "해", "주", "세", "용", "용"],
		"수식": ["수", "식"],
		"문자": ["문", "자"],
	};

	return (
		<FormulaDropdownLayout>
			{DropdonwItemList[name].map((item, index) =>
				<DropdownItem key={index} value={item} onClick={() => { }} />)}
		</FormulaDropdownLayout>
	);
}
