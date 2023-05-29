import Project from "../Project";


const Portfolio = () => {
    const projects = [
			{
				title: 'Project 1',
				github: 'https://www.google.com',
				link: 'https://www.google.com',
				image: 'https://via.placeholder.com/150',
			},
			{
				title: 'Project 2',
				github: 'https://www.google.com',
				link: 'https://www.google.com',
				image: 'https://via.placeholder.com/150',
			},
			{
				title: 'Project 3',
				github: 'https://www.google.com',
				link: 'https://www.google.com',
				image: 'https://via.placeholder.com/150',
			},
			{
				title: 'Project 4',
				github: 'https://www.google.com',
				link: 'https://www.google.com',
				image: 'https://via.placeholder.com/150',
			},
		];

    return (
			<div>
				<h2>Portfolio</h2>
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
