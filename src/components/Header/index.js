import React from 'react'
import styles from './style.module.css';
import { img_sampleLogo } from '../../assets'
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../../constants'

export default function Header() {
  return (
    <div className={`${styles.header} container`}>
      <div className="row align-items-center">
        <div className="col-3 d-flex align-items-center justify-content-start">
          <img src={img_sampleLogo} alt="sample-logo" width={85} className="img-fluid" />
        </div>
        <div className="col-6">
          <div className="d-flex justify-content-center align-items-center gap-3">
            {NAV_LINKS.map((link, index) => (
              <Link className='fs-4 fw-bold' to={link.path}>{link.name}</Link>
            ))}
          </div>
        </div>
        <div className="col-3 d-flex align-items-center justify-content-end gap-3">
          <i className="bi bi-facebook fs-5"></i>
          <i className="bi bi-twitter fs-5"></i>
          <i className="bi bi-instagram fs-5"></i>
        </div>
      </div>
    </div>
  )
}
