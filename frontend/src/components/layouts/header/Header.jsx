import { NavLink } from "react-router-dom"

import Logo from '../../../assets/images/svg/TextoBranco.svg'
import MenuBurger from '../../../assets/images/svg/burguer.png'
import CloseMenu from '../../../assets/images/svg/x.png'
import SearchIcon from '../../../assets/images/svg/LupaBranca.png'

import styles from './Header.module.css'

import { useRef, useEffect, useContext } from "react"
import { Context } from '../../../context/userContext'


const Header = () => {

    const headerRef = useRef(null)
    let lastScroll = 0
  
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

    
  const {authenticated, logout} = useContext(Context)


    return (
        <header ref={headerRef} className={`d-flex flex-wrap justify-content-between p-3 ${styles.header}`}>
            <img className={`px-4 ${styles.imgLogoWxhiteText}`} src={Logo} alt="Logo" />
            <nav className="d-flex">
                <ul className={`nav nav-pills d-flex align-items-center justify-content-center ms-5`}>
                    
                    <li className="nav-item">
                        <NavLink to="/" className={({ isActive }) => `nav-link ${styles.navLink} me-2 ${isActive ? styles.navLinkActive : "text-light"}` }>
                            Home
                        </NavLink>
                    </li>  

                    {
                        authenticated  ?
                            (
                                <>
                                    <li className="nav-item">
                                        <NavLink to="/blog" className={({ isActive }) => `nav-link ${styles.navLink}  ${isActive ? styles.navLinkActive : "text-light"}` }>Blog</NavLink>
                                     </li>
                                
                                    <li className="nav-item">
                                        <NavLink to="/contate-nos" className={({ isActive }) => `nav-link ${styles.navLink}  ${isActive ? styles.navLinkActive : "text-light"}` }> Contate-nos </NavLink>
                                    </li>

                                    <li className="nav-item" onClick={logout}>
                                        <a className = { `nav-link ${styles.navLink}  text-light` }>Sair</a>
                                    </li>
                                </>
                            )
                            :
                            (
                                <>     
                                    <li className="nav-item">
                                        <NavLink to="/register" className={({ isActive }) => `nav-link ${styles.navLink}  ${isActive ? styles.navLinkActive : "text-light"}` }>Registrar-se </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/login" className={({ isActive }) => `nav-link ${styles.navLink}  ${isActive ? styles.navLinkActive : "text-light"}` }> Entrar </NavLink>
                                    </li>
                                 </>
                            )
                    }

                    
                    <li className="nav-item">
                        <NavLink to="/plantas/ia" className={({ isActive }) => `nav-link ${styles.navLink}  ${isActive ? styles.navLinkActive : "text-light"}` }> Nossa IA </NavLink>
                    </li>

                    
                </ul>
            </nav>
            <div className={styles.menu}>
                <img src={MenuBurger} width="35px" height="35px" className={styles.menuBurger} alt="Menu" />
                <img src={CloseMenu} alt="Fechar Menu" width="27px" height="27px" className={styles.closeMenu} />
            </div>
            <form action="/buscar-planta" method="GET" className={`d-flex pe-4 ${styles.buscarPlantaForm}`}>
                <div className="input-group">
                    <input autoComplete="off" type="text" id="planta" name="nomePopular" className={`form-control me-1 ${styles.formControl}`} placeholder="Buscar Planta..." />
                    <button type="submit" className={`btn btn-success ${styles.customBtn}`}>
                        <img src={SearchIcon} alt="Buscar" className={styles.iconLupa} />
                    </button>
                </div>
            </form>
        </header>
    )
}

export default Header
