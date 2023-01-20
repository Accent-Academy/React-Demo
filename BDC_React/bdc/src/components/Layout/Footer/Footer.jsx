import React from 'react'
import styles from "./footer.module.scss"
const Footer = () => {
  return (
    <footer className={styles.footer}>

      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-md-6 col-sm-12 g-4">
            <ul className={styles.list}>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
            </ul>

          </div>
          <div className="col-xl-4 col-md-6 col-sm-12 g-4">
            <ul className={styles.list}>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
            </ul>

          </div>
          <div className="col-xl-4 col-md-6 col-sm-12 g-4">
            <ul className={styles.list}>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
            </ul>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer