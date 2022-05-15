import './styles.scss';
import logoIMG from '../assets/images/logo.png'
import LogoutIMG from '../assets/images/logout.svg'

export function Header() {
  return (
    <header className="container">
      <div className="content">
        <img src={logoIMG} alt="Salic" className="logo" />

        <nav>
          <a href="#/">Lorem ipsum</a>
          <a href="#/">Lorem ipsum</a>
          <a href="#/">Lorem ipsum</a>
          <a href="#/">Lorem ipsum</a>
          <a href="#/">Lorem ipsum</a>
        </nav>

        <div className="icons">
          <img src={LogoutIMG} className="icon" alt="Sair" />
        </div>

      </div>
    </header>
  )
}