import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card';
import './Project.css';

const Project = ({ title, github, link, image }) => {
	return (
		<Card>
			<a href={link} target='_blank' rel='noreferrer'>
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
		</Card>
	);
};

export default Project;
