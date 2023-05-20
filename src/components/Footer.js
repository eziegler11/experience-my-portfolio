import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
	return (
		<footer>
			<FontAwesomeIcon icon={faGithub} flip />
			<FontAwesomeIcon icon={faLinkedin} flip />
			<FontAwesomeIcon icon={faInstagram} flip />
		</footer>
	);
}

export default Footer;
