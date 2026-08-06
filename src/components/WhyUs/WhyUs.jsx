import './WhyUs.css'

function WhyUs({ whyUs }) {
    return (
        <section
            className="why-us"
            style={{ backgroundImage: `url(${whyUs.imageUrl})` }}
        >
          <div className="why-us-container">

              <h4 className="why-us-subtitle">
                        {whyUs.subtitle}
              </h4>

              <h1 className="why-us-title">
                        {whyUs.title}
              </h1>

          </div>
        </section>
    )
}

export default WhyUs