import React from 'react'
import('./Styles/NavbarStyle.css')

const Navbar = () => {
  return (
    
    <nav className="navbar">
        <div className="logo">
            <img style={{width:'20%', paddingLeft:'200px'}} src='../../assets/icone.png' alt='Logo' />
        </div>
        <ul className="nav-links">
            <li><a href="/">Accueil</a></li>
            <li><a href="/about">À propos</a></li>
            <li><a href="/edition">Éditions</a></li>
        </ul>
    </nav>
    
  )
}

export default Navbar