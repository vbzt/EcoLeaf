import { NavLink } from "react-router-dom"
import { useRef, useEffect, useContext, useState } from "react"

import Logo from "../../../assets/images/svg/TextoBranco.svg"
import MenuBurger from "../../../assets/images/svg/burguer.png"
import CloseMenu from "../../../assets/images/svg/x.png"

import styles from "./Header.module.css"
import { Context } from "../../../context/userContext"

const Header = () => {
  const headerRef = useRef(null)
  let lastScroll = 0
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY

      if (headerRef.current) {
        if (currentScroll > lastScroll) {
          headerRef.current.style.transform = "translateY(-150%)"
        } else {
          headerRef.current.style.transform = "translateY(0%)"
        }
      }

      lastScroll = currentScroll
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const { authenticated, logout } = useContext(Context)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      const isOpening = !prev
  
      if (isOpening) {
        const scrollY = window.scrollY
        document.body.style.position = 'fixed'
        document.body.style.top = `-${scrollY}px`
        document.body.dataset.scrollY = scrollY 
      } else {
        const scrollY = document.body.dataset.scrollY || '0'
        document.body.style.position = ''
        document.body.style.top = ''
        window.scrollTo(0, parseInt(scrollY)) 
      }
  
      return isOpening
    })
  }
  

  

  return (
    <header ref={headerRef} className={`d-flex flex-wrap justify-content-between p-3 ${styles.header}`}>
      <div className={styles.desktopNav}>
        <img className={`${styles.imgLogoWxhiteText}`} src={Logo} alt="Logo" />
        <nav className="d-flex">
          <ul className="nav nav-pills d-flex align-items-center justify-content-center ms-5">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => `nav-link ${styles.navLink} me-2 ${isActive ? styles.navLinkActive : "text-light"}`}>Home</NavLink>
            </li>

            {authenticated ? (
              <>
                <li className="nav-item">
                  <NavLink to="/blog" className={({ isActive }) => `nav-link ${styles.navLink} ${isActive ? styles.navLinkActive : "text-light"}`}>Blog</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/plantas" className={({ isActive }) => `nav-link ${styles.navLink} ${isActive ? styles.navLinkActive : "text-light"}`}>Catálogo de plantas</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contate-nos" className={({ isActive }) => `nav-link ${styles.navLink} ${isActive ? styles.navLinkActive : "text-light"}`}>Contrate-nos</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/profile" className={({ isActive }) => `nav-link ${styles.navLink} ${isActive ? styles.navLinkActive : "text-light"}`}>Perfil</NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink to="/register" className={({ isActive }) => `nav-link ${styles.navLink} ${isActive ? styles.navLinkActive : "text-light"}`}>Registrar-se</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/login" className={({ isActive }) => `nav-link ${styles.navLink} ${isActive ? styles.navLinkActive : "text-light"}`}>Entrar</NavLink>
                </li>
              </>
            )}

            <li className="nav-item">
              <NavLink to="/ia" className={({ isActive }) => `nav-link ${styles.navLink} ${isActive ? styles.navLinkActive : "text-light"}`}>Nossa IA</NavLink>
            </li>
          </ul>
        </nav>
        <NavLink to="/ia/gerar"><button>Achar uma planta ideal</button></NavLink>
      </div>

      <div className={styles.mobileNav} style={{ height: isMenuOpen ? "100vh" : "auto" }}>
        <div className={styles.menu}>
          <img className={`${styles.imgLogoWxhiteText}`} src={Logo} alt="Logo" />
          <img src={isMenuOpen ? CloseMenu : MenuBurger} width="35px" height="35px" onClick={toggleMenu} className={isMenuOpen ? styles.close : styles.menuBurger} alt="Menu" />
        </div>
        <nav className={isMenuOpen ? styles.navActivated : styles.navDeactivated}>
          <ul className="nav nav-pills d-flex align-items-center justify-content-center flex-column gap-5">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => `nav-link ${styles.navLink} me-2 ${isActive ? styles.navLinkActive : "text-light"}`}>Home</NavLink>
            </li>

            {authenticated ? (
              <>
                <li className="nav-item">
                  <NavLink to="/blog" className={({ isActive }) => `nav-link ${styles.navLink} ${isActive ? styles.navLinkActive : "text-light"}`}>Blog</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/plantas" className={({ isActive }) => `nav-link ${styles.navLink} ${isActive ? styles.navLinkActive : "text-light"}`}>Catálogo de plantas</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contate-nos" className={({ isActive }) => `nav-link ${styles.navLink} ${isActive ? styles.navLinkActive : "text-light"}`}>Contrate-nos</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/profile" className={({ isActive }) => `nav-link ${styles.navLink} ${isActive ? styles.navLinkActive : "text-light"}`}>Perfil</NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink to="/register" className={({ isActive }) => `nav-link ${styles.navLink} ${isActive ? styles.navLinkActive : "text-light"}`}>Registrar-se</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/login" className={({ isActive }) => `nav-link ${styles.navLink} ${isActive ? styles.navLinkActive : "text-light"}`}>Entrar</NavLink>
                </li>
              </>
            )}

            <li className="nav-item">
              <NavLink to="/ia" className={({ isActive }) => `nav-link ${styles.navLink} ${isActive ? styles.navLinkActive : "text-light"}`}>Nossa IA</NavLink>
            </li>
          <NavLink to="/ia/gerar"><button>Achar uma planta ideal</button></NavLink>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
