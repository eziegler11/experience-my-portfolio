import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Project = ({ title, link, image }) => {
	return (
		<div>
			<h3>
				{title} <FontAwesomeIcon icon={faGithub} />
			</h3>
			<a href={link} target='_blank' rel='noreferrer'>
				<img src={image} alt={title} />
			</a>
		</div>
	);
};

export default Project;


// Need to create a Pages folder, and make pages for About Me, Contact, Portfolio, and Resume

// Within those pages, have text displaying the information for each page

// Set up conditional rendering based on the Navigation bar and whichever is clicked and that page will render (see activity 24)

// Add custom color pallette, font and styling to the pages

// Need to have GitHub icon work as a link to take you to GitHub and have the image be a link to the deployed application