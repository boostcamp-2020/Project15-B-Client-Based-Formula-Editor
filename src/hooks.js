import { useState, useCallback } from "react";

import { calcTopPreviewItem } from "./util";

export const usePreviewItem = initialValue => {
	const [previewItem, setPreviewItem] = useState(initialValue);

	const handleMouseEnterItem = useCallback(id => e => {
		const [{ y }] = e.target.getClientRects();

		setPreviewItem({ id, top: calcTopPreviewItem(y) });
	}, []);

	return [previewItem, handleMouseEnterItem];
};

export const useSearch = initialValue => {
	const [searchTerm, setSearchTerm] = useState(initialValue);

	const handleFilter = ({ target }) => {
		const inputValue = target.value;

		if (!inputValue) {
			setSearchTerm("");
			return;
		}
		setSearchTerm(inputValue);
	};

	return [searchTerm, handleFilter];
};

export default usePreviewItem;
