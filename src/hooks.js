import { useState, useCallback } from "react";

import { calcTopPreviewItem } from "./util";

export const usePreviewItem = initialValue => {
	const [previewItem, setPreviewItem] = useState(initialValue);

	const handleMouseEnterItem = useCallback(id => e => {
		setPreviewItem({ id, top: calcTopPreviewItem(e.pageY) });
	}, []);

	return [previewItem, handleMouseEnterItem];
};

export default usePreviewItem;
