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

export default usePreviewItem;
