import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">

      <h1>Together, we can build the site of your dreams.</h1>

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