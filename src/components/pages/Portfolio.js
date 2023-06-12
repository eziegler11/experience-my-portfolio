import Project from "../Project";



const Portfolio = () => {
    const projects = [
			{
				title: 'The Social Network',
				github: 'https://github.com/eziegler11/the-social-network',
				link: 'https://www.google.com',
				image: 'https://via.placeholder.com/150',
			},
			{
				title: 'Note Taking App',
				github: 'https://github.com/eziegler11/note-taking-app',
				link: 'https://www.google.com',
				image: 'https://via.placeholder.com/150',
			},
			{
				title: 'Logo Generator',
				github: 'https://github.com/eziegler11/logo-generator',
				link: 'https://www.google.com',
				image: 'https://via.placeholder.com/150',
			},
			{
				title: 'Best Selling Books',
				github: 'https://github.com/eziegler11/bestselling-books',
				link: 'https://www.google.com',
				image: 'https://via.placeholder.com/150',
			},
		];

    return (
			<div>
				<h3>Portfolio</h3>
				<div className='cards'>
					{projects.map((project, index) => (
						<Project
							key={index}
							title={project.title}
							github={project.github}
							link={project.link}
							image={project.image}
						/>
					))}
				</div>
			</div>
		);
};

export default Portfolio;
