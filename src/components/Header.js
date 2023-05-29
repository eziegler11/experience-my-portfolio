import React, { useState } from 'react';
import './Header.css';
import Navigation from './Navigation';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

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
			<header id='header'>
				<div id='site-logo'>
					<h1>Erich Ziegler</h1>
					<h2>Coding in Colorado</h2>
				</div>
				<div id='navigation'>
					<Navigation
						currentPage={currentPage}
						handlePageChange={handlePageChange}
					/>
				</div>
			</header>
			{renderPage()}
			<div className='clearfix'></div>
		</>
	);
}

export default Header;
