import React from 'react'
import styles from './style.module.css';
import { img_sampleLogo } from '../../assets'
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../../constants'
import { Nav, Navbar } from 'react-bootstrap';

export default function Header() {
  return (
    <div className={`${styles.header} container row justify-content-center`}>
      <div className="col-8 col-md-12 row align-items-center flex-row-reverse flex-md-row">
        <div className="col-6 col-md-3 d-flex align-items-center justify-content-center justify-content-md-start">
          <img src={img_sampleLogo} alt="sample-logo" width={85} className="img-fluid" />
        </div>
        <div className="col-6 d-none d-md-block">
          <div className="d-flex justify-content-center align-items-center gap-3">
            {NAV_LINKS.map((link, index) => (
              <Link className='fs-4 fw-bold' to={link.path}>{link.name}</Link>
            ))}
          </div>
        </div>
        <div className="col-6 col-md-3 d-flex align-items-center justify-content-end gap-3">
          <i className="bi bi-facebook fs-5"></i>
          <i className="bi bi-twitter fs-5"></i>
          <i className="bi bi-instagram fs-5"></i>
        </div>
      </div>
      <div className="col-4 d-flex justify-content-end d-md-none">
        <Navbar expand="md">
          <Navbar.Toggle />
          <Navbar.Collapse >
            <Nav className="me-auto">
              {NAV_LINKS.map((link, index) => (
                <Link className='fs-4 fw-bold' to={link.path}>{link.name}</Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  )
}
