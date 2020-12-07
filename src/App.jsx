import React, { useRef } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import GlobalStyle from "./GlobalStyle";
import QueryStringCatcher from "./containers/QueryStringCatcher";
import HeaderContainer from "./containers/HeaderContainer";
import BodyContainer from "./containers/BodyContainer";
import FooterContainer from "./containers/FooterContainer";
import SideBar from "./containers/SideBar";
import MainWrapper from "./layouts/MainWrapper";
import MainLayout from "./layouts/MainLayout";

export default function App() {
	const mainWrapperRef = useRef();

	return (
		<BrowserRouter>
			<Route exact path="/">
				<GlobalStyle />
				<QueryStringCatcher />
				<MainWrapper ref={mainWrapperRef} >
					<SideBar mainWrapperRef={mainWrapperRef} />
					<MainLayout >
						<HeaderContainer />
						<BodyContainer />
						<FooterContainer />
					</MainLayout>
				</MainWrapper>
			</Route>
		</BrowserRouter>
	);
}
