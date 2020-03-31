import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const MainMenu = () => (
    <header className="main-header">
            <div className="l-container">
                <Link to={`/`}>
                    <img src="https://ux.ed.team/img/edteam-ux-logo.svg" alt="Logo de EDteam" className="main-logo"/>
                </Link>
                <div className="main-toggle" id="main-toggle"></div>
                <nav className="main-nav" id="main-nav">
                    <ul className="main-menu">
                        <li className="main-menu--items">
                            <NavLink exact to="/" activeClassName="activo" className="main-menu--links">Inicio</NavLink>
                        </li>
                        <li className="main-menu--items">
                            <NavLink to="/cursos" activeClassName="activo" className="main-menu--links">Cursos</NavLink>
                        </li>
                        <li className="main-menu--items">
                            <NavLink to="/formulario" activeClassName="activo" className="main-menu--links">Formulario</NavLink>
                        </li>
                    </ul>
                </nav>
            </div> 
    </header>
)
export default MainMenu;