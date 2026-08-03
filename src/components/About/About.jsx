import './About.css'

function About({ about }) {
  return (
    <section className="about">

      <div className="about-container">

        <div className="about-heading">

          <h1>{about.titles[1]}</h1>

          <h1>{about.titles[2]}</h1>

        </div>

        <div className="about-content">

          {about.introductions.map((text, index) => (
            <p key={index}>{text}</p>
          ))}

        </div>

      </div>

    </section>
  )
}

export default About