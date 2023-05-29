import Navigation from "./Navigation";
import "./Header.css"

function Header() {
	return (
		<>
			<header id="header">
				<div id="site-logo">
					<h1>Erich Ziegler</h1>
					<h2>Coding in Colorado</h2>
				</div>
			<Navigation />
			</header>
			<div className="clearfix"></div>
		</>
	);
}

export default Header;
