import './Hero.css'

function Hero({ banner }) {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${banner.backgroundImage})` }}
    >
      <div className="hero-container">

        <div className="hero-content">
          <h1>{banner.title}</h1>

          <h3>{banner.subtitle}</h3>

          <button className="hero-button">
            Contact Us
          </button>
        </div>

        <div className="hero-image">
          {banner.heroImage && (
            <img
              src={banner.heroImage}
              alt="AllMoto"
            />
          )}
        </div>

      </div>
    </section>
  )
}

export default Hero