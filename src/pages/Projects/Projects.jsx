import './Projects.css'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import projectsData from '../../data/projectsData'

function Projects() {

    const categories = [...new Set(
        projectsData.map(project => project.category)
    )]

    return (
        <main className="projects">

            <div className="projects-container">

                <h2 className="projects-title">
                    Projects
                </h2>

                {categories.map(category => {

                    const projects = projectsData.filter(
                        project => project.category === category
                    )

                    return (
                        <section
                            key={category}
                            className="project-group"
                            id={category}
                        >

                            <h3 className="project-category">
                                {category}
                            </h3>

                            <div className="projects-grid">

                                {projects.map(project => (
                                    <ProjectCard
                                        key={project.id}
                                        project={project}
                                    />
                                ))}

                            </div>

                        </section>
                    )
                })}

            </div>

        </main>
    )
}

export default Projects