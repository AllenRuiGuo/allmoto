import { Link } from 'react-router-dom'
import logo from '../../assets/logofornavbarnobg.PNG'
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
          <Link to="/projects">Projects</Link>
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