import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import { setLatexInput } from "./slice";
import { decodeQueryString } from "./util";
import GlobalStyle from "./GlobalStyle";
import HeaderContainer from "./containers/HeaderContainer";
import BodyContainer from "./containers/BodyContainer";
import FooterContainer from "./containers/FooterContainer";
import SideBar from "./containers/SideBar";
import MainWrapper from "./layouts/MainWrapper";
import MainLayout from "./layouts/MainLayout";

export default function App() {
	const dispatch = useDispatch();
	const mainWrapperRef = useRef();

	const latex = decodeQueryString();

	dispatch(setLatexInput(latex));

	return (
		<>
			<GlobalStyle />
			<MainWrapper ref={mainWrapperRef} >
				<MainLayout >
					<HeaderContainer />
					<BodyContainer />
					<FooterContainer />
				</MainLayout>
			</MainWrapper>
			<SideBar mainWrapperRef={mainWrapperRef} />
		</>
	);
}
