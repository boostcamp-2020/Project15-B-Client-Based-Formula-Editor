import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import GlobalStyle from "./GlobalStyle";
import QueryStringCatcher from "./containers/QueryStringCatcher";
import BodyContainer from "./containers/BodyContainer";
import SideBar from "./containers/SideBar";
import FooterContainer from "./containers/FooterContainer";
import MainLayout from "./layouts/MainLayout";
import MainContentWrapper from "./layouts/MainContentWrapper";


export default function App() {
	return (
		<BrowserRouter>
			<Route exact path="/">
				<GlobalStyle />
				<QueryStringCatcher />
				<MainLayout>
					<SideBar />
					<MainContentWrapper>
						<FooterContainer />
						<BodyContainer />
					</MainContentWrapper>
				</MainLayout>
			</Route>
		</BrowserRouter>
	);
}
