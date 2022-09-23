import React from 'react'

function Navbar() {
  return (
    <nav id="navbar" className="navbar nav-menu">
      
    
  <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
  
  <header id="header" class="d-flex flex-column justify-content-center"></header>
    <ul>
      <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
      <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
      <li><a href="#Skills" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Skills</span></a></li>
      <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
      <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Personal Project</span></a></li>
      
      <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
    </ul>
  </nav>
  )
}

export default Navbar