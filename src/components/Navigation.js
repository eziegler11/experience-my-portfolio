import './Navigation.css';
import './pages/Portfolio.css';
import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
	return (
		<nav id='site-nav'>
			<ul>
				<li>
					<a
						href='#home'
						onClick={() => handlePageChange('Home')}
						className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
					>
						Home
					</a>
				</li>
				<li>
					<a
						href='#about'
						onClick={() => handlePageChange('About')}
						className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
					>
						About
					</a>
				</li>
				<li>
					<a
						href='#portfolio'
						onClick={() => handlePageChange('Portfolio')}
						className={
							currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'
						}
					>
						Portfolio
					</a>
				</li>
				<li>
					<a
						href='#contact'
						onClick={() => handlePageChange('Contact')}
						className={
							currentPage === 'Contact' ? 'nav-link active' : 'nav-link'
						}
					>
						Contact
					</a>
				</li>
				<li>
					<a
						href='#resume'
						onClick={() => handlePageChange('Resume')}
						className={
							currentPage === 'Resume' ? 'nav-link active' : 'nav-link'
						}
					>
						Resume
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
