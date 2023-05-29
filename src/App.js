import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
// import Portfolio from './components/pages/Portfolio';
// import PortfolioContainer from './components/PortfolioContainer';

function App() {
	return (
		<>
			<Header />
			{/* <Portfolio /> */}
			{/* <PortfolioContainer /> */}
			<Footer />
		</>
	);
}

export default App;

// Need to create a Pages folder, and make pages for About Me, Contact, Portfolio, and Resume

// Within those pages, have text displaying the information for each page

// Set up conditional rendering based on the Navigation bar and whichever is clicked and that page will render (see activity 24)

// Add custom color palette, font and styling to the pages

// Need to have GitHub icon work as a link to take you to GitHub and have the image be a link to the deployed application

// Have resume link to actual download of resume
// {/* <a href='./resume.pdf'>My resume</a>; */}
