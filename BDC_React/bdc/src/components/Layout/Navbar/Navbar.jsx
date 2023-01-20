import React from 'react'
import styles from "./navbar.module.scss"
import { Link } from 'react-router-dom'
import route from '../../../routes'
const Navbar = () => {
  return (
    <nav className={styles.navbar}>

      <div className="container">
        <div className="row">
          <div className="col-4">
            <img className={styles.logo} src="https://www.bakudesigncenter.az/front/images/logo%201.png" alt="" />
          </div>
          <div className="col-8">
            <ul className={styles.menu}>
             {
              route&&route.map((link)=>(
           <Link to={link.path} key={`navbar-items_name${link.name}`}>
                <li >{link.name}</li></Link>
               
              ))
             }
              <li className={styles.login}>Daxil ol</li>
            </ul>
      

          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar