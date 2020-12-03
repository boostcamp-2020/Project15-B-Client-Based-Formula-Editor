import React, { useRef } from "react";
import {
	BrowserRouter,
	Switch,
	Route,
} from "react-router-dom";

import GlobalStyle from "./GlobalStyle";
import HeaderContainer from "./containers/HeaderContainer";
import BodyContainer from "./containers/BodyContainer";
import FooterContainer from "./containers/FooterContainer";
import SideBar from "./containers/SideBar";
import MainWrapper from "./layouts/MainWrapper";
import MainLayout from "./layouts/MainLayout";
import RouterExceptionCatcher from "./containers/RouterExceptionCatcher";

export default function App() {
	const mainWrapperRef = useRef();

	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<GlobalStyle />
					<MainWrapper ref={mainWrapperRef} >
						<MainLayout >
							<HeaderContainer />
							<BodyContainer />
							<FooterContainer />
						</MainLayout>
					</MainWrapper>
					<SideBar mainWrapperRef={mainWrapperRef} />
				</Route>
				<Route path="/:latexParameter">
					<RouterExceptionCatcher />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}
