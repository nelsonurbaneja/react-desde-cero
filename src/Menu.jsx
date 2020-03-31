import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => (
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
            <li className="main-menu--items">
                <NavLink to="/usuarios" activeClassName="activo" className="main-menu--links">Usuarios</NavLink>
            </li>
            <li className="main-menu--items">
                <NavLink to="/noticias" activeClassName="activo" className="main-menu--links">Noticias</NavLink>
            </li>
        </ul>
    </nav>
)

export default Menu