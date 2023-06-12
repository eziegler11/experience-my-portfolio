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
						className={currentPage === 'Home' ? 'active' : 'inactive'}
					>
						Home
					</a>
				</li>
				<li>
					<a
						href='#about'
						onClick={() => handlePageChange('About')}
						className={currentPage === 'About' ? 'active' : 'inactive'}
					>
						About
					</a>
				</li>
				<li>
					<a
						href='#portfolio'
						onClick={() => handlePageChange('Portfolio')}
						className={
							currentPage === 'Portfolio' ? 'active' : 'inactive'
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
							currentPage === 'Contact' ? 'active' : 'inactive'
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
							currentPage === 'Resume' ? 'active' : 'inactive'
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
