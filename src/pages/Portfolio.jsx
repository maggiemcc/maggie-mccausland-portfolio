import projectData from './projects.json';

function Portfolio() {
    return (
        <main>
            <section id="work">
                <h2>My Work</h2>
                <div className="projects">
                    {projectData.map((project)=>(
                        <div className="project" key={project.name}>
                        <div className="project-title">
                            <h3>{project.name}</h3>
                            <div className='apps'>
                                <li><a href={project.github} target="_blank" rel="noreferrer"><img className="project-apps"  src={project.repoLogo} alt="github logo" /></a></li>
                                <li><a href={project.deploy} target="_blank" rel="noreferrer"><img className="project-apps"  src={project.deployLogo} alt="deploy logo" /></a></li>
                            </div>
                        </div>
                        <img src={project.image} alt={project.name} />
                    </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
export default Portfolio;
