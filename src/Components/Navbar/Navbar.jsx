import '../Navbar/Navbar.css'
import logo from '../../../src/assets/react.svg'
import React from 'react'
function Navbar() {
    return (
      <>
      
       <div>
       <header className="header">
           <a href="/">
            <img src={logo} alt="logo" />
           </a>
            <nav className="navbar">
                <a href="/">Home</a>
                <a href="/">Gestionnaire </a>
                <a href="/">Profil</a>
                <a href="/">Login</a>
            </nav>
        </header>
       </div>
      
      </>
    )
}
export default Navbar   