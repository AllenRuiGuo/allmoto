import './Hero.css'

function Hero({ banner, onContactClick }) {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${banner.imageUrl})` }}
    >
      <div className="hero-container">

        <div className="hero-content">
          <h1>{banner.title}</h1>

          <h3>{banner.subtitle}</h3>

          <button
              type="button"
              className="btn-theme"
              onClick={onContactClick}
          >
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