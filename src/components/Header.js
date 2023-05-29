import Navigation from "./Navigation";
import "./Header.css"
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import React, { useState } from 'react';

function Header() {
	const [currentPage, setCurrentPage] = useState('Home');

	const renderPage = () => {
		if (currentPage === 'Home') {
			return <Home />;
		}
		if (currentPage === 'About') {
			return <About />;
		}
		if (currentPage === 'Portfolio') {
			return <Portfolio />;
		}
		if (currentPage === 'Contact') {
			return <Contact />;
		}
		return <Resume />;
	};

	const handlePageChange = (page) => setCurrentPage(page);

	return (
		<>
			<header id="header">
				<div id="site-logo">
					<h1>Erich Ziegler</h1>
					<h2>Coding in Colorado</h2>
				</div>
			<Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
			{renderPage()}
			</header>
			<div className="clearfix"></div>
		</>
	);
}

export default Header;
