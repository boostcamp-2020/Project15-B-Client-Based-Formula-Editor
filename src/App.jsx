import React from "react";

import GlobalStyle from "./GlobalStyle";
import HeaderContainer from "./containers/HeaderContainer";

export default function App() {
	return (
		<>
			<GlobalStyle />
			<div>hello world</div>
			<HeaderContainer />
		</>
	);
}
