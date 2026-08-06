import './WhyUs.css'

function WhyUs({ whyUs }) {
    return (
        <section
            className="why-us"
            style={{ backgroundImage: `url(${whyUs.imageUrl})` }}
        >
            <div className="why-us-overlay">

                <div className="why-us-container">

                    <h5 className="why-us-subtitle">
                        {whyUs.subtitle}
                    </h5>

                    <h1 className="why-us-title">
                        {whyUs.title}
                    </h1>

                </div>

            </div>
        </section>
    )
}

export default WhyUs