import { useParams } from 'react-router-dom'
import './ProjectDetails.css'
import projectsData from '../../data/projectsData'

function ProjectDetails() {

    const { projectId } = useParams()

    const project = projectsData.find(
        project => project.id === projectId
    )

    if (!project) {
        return (
            <main className="project-not-found">
                <h1>Project not found</h1>
            </main>
        )
    }

    return (
        <main className="project-details">

            <section
                className="project-banner"
                style={{
                    backgroundImage: `url("${project.bannerImage}")`
                }}
            >

                <div className="project-banner-overlay">

                    <div className="project-banner-container">

                        <h1>
                            {project.title}
                        </h1>

                        <h4>
                            {project.subtitle}
                        </h4>

                    </div>

                </div>

            </section>

            <section className="project-content">

                <div
                    dangerouslySetInnerHTML={{
                        __html: project.content
                    }}
                />

            </section>

        </main>
    )
}

export default ProjectDetails