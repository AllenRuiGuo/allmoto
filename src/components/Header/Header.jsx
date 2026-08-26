import logo from '../../assets/logofornavbarnobg.png'
import './Header.css'

function Header({ onContactClick }) {
  return (
    <header className="site-header">
      <div className="header-container">

        <a href="/" className="brand">
          <img className="brand-logo" src={logo} alt="AllMoto" />
          <span className="brand-name">AllMoto</span>
        </a>

        <nav className="site-nav">
          <a href="/projects">Projects</a>
          <button
              type="button"
              className="btn-theme"
              onClick={onContactClick}
          >
              Contact
          </button>         
        </nav>

      </div>
    </header>
  )
}

export default Header