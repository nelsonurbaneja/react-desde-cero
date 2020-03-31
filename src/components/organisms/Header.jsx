import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../atoms/Logo'
import Menu from '../molecules/Menu'

const Header = () => (
    <header className="main-header">
            <div className="l-container">
                <Link to={`/`}>
                    <Logo/>
                </Link>
                <div className="main-toggle" id="main-toggle"></div>
                <Menu/>
            </div> 
    </header>
)
export default Header;