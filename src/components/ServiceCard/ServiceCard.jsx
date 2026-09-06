import { Link } from 'react-router-dom'
import './ServiceCard.css'
import '../../styles/buttons.css'

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


                <Link 
                    href="/projects"
                    className="btn-theme"
                >
                    Learn More
                </Link>

            </div>

        </div>
    )
}

export default ServiceCard