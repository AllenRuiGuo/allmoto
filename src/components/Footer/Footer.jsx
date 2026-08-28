import './Footer.css'

function Footer({ onContactClick }) {
  return (
    <footer className="site-footer">

      <h1>Let's turn your ideas into reality.</h1>

      <button
          type="button"
          className="btn-theme"
          onClick={onContactClick}
      >
          Contact Us
      </button>

      <p>© 2023 AllMoto</p>

    </footer>
  )
}

export default Footer