import React from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setLatexInput } from "../slice";
import { decodeQueryString } from "../util";

export default function RouterExceptionCatcher() {
	const dispatch = useDispatch();

	const latex = decodeQueryString();

	dispatch(setLatexInput(latex));

	return <Redirect to="/" />;
}
