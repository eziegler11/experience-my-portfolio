import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card';
import './Project.css';

const Project = ({ index, title, github, link, image }) => {
	return (
		<div className={index === 0 ? 'card' : ['card', 'first-card'].join(' ')}>
			<a href={link}>
				<Card.Img variant='top' src={image} alt={title} />
			</a>
			<Card.Body>
				<Card.Title className='pos-tl'>
					{title}&nbsp;
					<a href={github} target='_blank' rel='noreferrer'>
						<FontAwesomeIcon icon={faGithub} />
					</a>
				</Card.Title>
				{/* <Card.Text>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</Card.Text> */}
				{/* <Button variant="primary">Go somewhere</Button> */}
			</Card.Body>
		</div>
	);
};

export default Project;
