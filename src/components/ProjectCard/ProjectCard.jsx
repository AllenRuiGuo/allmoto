import './ProjectCard.css'

function ProjectCard({ project }) {

    return (
        <div className="project-card-wrapper">

            <a
                href={`/projects/${project.id}`}
                className="project-card"
                style={{
                    backgroundImage: `url("${project.thumbnail}")`
                }}
            >

                <div className="project-overlay">

                    <div className="project-overlay-content">

                        <h3>
                            {project.title}
                        </h3>

                    </div>

                </div>

            </a>

            <h5 className="project-card-title">
                {project.title}
            </h5>

        </div>
    )
}

export default ProjectCard