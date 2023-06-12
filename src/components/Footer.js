import {
	faGithub,
	faInstagram,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

function Footer() {
	return (
		<footer>
			<div>
				<a
					href='https://www.github.com/eziegler11'
					target='_blank'
					rel='noreferrer'
				>
					<FontAwesomeIcon icon={faGithub} />
				</a>
			</div>
			<div>
				<a
					href='https://www.linkedin.com/in/erich-ziegler'
					target='_blank'
					rel='noreferrer'
				>
					<FontAwesomeIcon icon={faLinkedin} />
				</a>
			</div>
			<div>
				<a
					href='https://www.instagram.com/erichziegler'
					target='_blank'
					rel='noreferrer'
				>
					<FontAwesomeIcon icon={faInstagram} />
				</a>
			</div>
		</footer>
	);
}

export default Footer;
