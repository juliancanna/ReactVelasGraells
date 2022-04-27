import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link to='/'>
      <img src='./target.png' width='50'/>  
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link className="nav-link" to='/' >Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/Velas' >Velas</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/EscenciasyMas'>Escencias y más</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar