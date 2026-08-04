import './ServiceCard.css'

function ServiceCard({ service }) {

    return (
        <div className="service-card">

            <div className="service-card-content">

                <img
                    src={service.thumbnail}
                    alt={service.title}
                    className="service-card-image"
                />


                <h3>
                    {service.title}
                </h3>


                <p>
                    {service.description}
                </p>


                <a 
                    href="/projects"
                    className="service-card-button"
                >
                    Learn More
                </a>

            </div>

        </div>
    )
}

export default ServiceCard