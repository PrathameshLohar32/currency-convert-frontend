import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Navbar.module.css';
const Navbar = ({scrollToTarget,scrollToFooter,scrollToInfo}) => {
  return (
    <div >
      <nav className={`navbar navbar-expand-lg ${styles.navbar}`} >
  <div class="container-fluid" >
    <a class="navbar-brand" href="#" style={{fontWeight: 700,fontFamily:'cursive'}}><img src='\nav-logo-removebg-preview.png' className={styles.logo}></img>Currency Convert</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div  id="navbarNav" className={`collapse navbar-collapse ${styles.navshift}`}>
      <ul class="navbar-nav">
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#" style={{fontWeight: 700}}>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{fontWeight: 700}} onClick={scrollToInfo}>About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{fontWeight: 700}} onClick={scrollToTarget}>Convert It</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{fontWeight: 700}} onClick={scrollToFooter}>Connect Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
