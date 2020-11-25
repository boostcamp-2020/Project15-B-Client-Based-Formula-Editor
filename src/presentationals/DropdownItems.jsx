import React from "react";

import FormulaDropdownLayout from "../layouts/FormulaDropdownLayout";
import DropdownItem from "../presentationals/DropdownItem";
import characterLatex from "../constants/characterLatex";

export default function DropdownItems({ name, onItemClick }) {
	return (
		<FormulaDropdownLayout>
			{characterLatex[name].map((item, index) =>
				<DropdownItem key={index} item={item} onClick={onItemClick(item.latex)} />)}
		</FormulaDropdownLayout>
	);
}
