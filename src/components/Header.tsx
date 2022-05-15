import './styles.scss';
import logoIMG from '../assets/images/logo.png'
import LogoutIMG from '../assets/images/logout.svg'

export function Header() {
  function Close() {
    window.close();
  }

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
          <a onClick={Close} href="#/">
            <img src={LogoutIMG} className="icon" alt="Sair" />
          </a>
        </div>

      </div>
    </header>
  )
}