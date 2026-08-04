import './Services.css'
import ServiceCard from '../ServiceCard/ServiceCard'

function Services({ services }) {
  return (
    <section className="services">

      <div className="services-container">

        <h1>{services.title}</h1>

        <p className="services-description">
          {services.description}
        </p>

        <div className="services-grid">

          {services.keyServices.map(service => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}

        </div>

      </div>

    </section>
  )
}

export default Services