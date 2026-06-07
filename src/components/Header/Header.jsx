import logo from '../../assets/logofornavbarnobg.png'
import './Header.css'

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">

        <a href="/" className="brand">
          <img src={logo} alt="AllMoto" />
          <span>AllMoto</span>
        </a>

        <nav className="site-nav">
          <a href="/projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

      </div>
    </header>
  )
}

export default Header