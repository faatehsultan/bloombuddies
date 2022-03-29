import React from 'react'
import { img_sampleLogo } from '../../assets'
import styles from "./style.module.css"

export default function TeamCard() {
  return (
    <div className={styles.TeamCard + ' shadow rounded-2 bg-white p-4'}>
      <img src={img_sampleLogo} alt="" style={{ width: "250px" }} className="img-fluid" />
      <div className="text-center fs-1 fw-bolder mt-3">
        LOREM
      </div>
      <div className="text-center fs-5 fw-bolder mt-3">
        ARTIST/FOUNDER
      </div>
      <div className="d-flex align-items-center justify-content-center gap-3 mt-3">
        <i className="bi bi-facebook fs-5"></i>
        <i className="bi bi-twitter fs-5"></i>
        <i className="bi bi-instagram fs-5"></i>
      </div>
    </div >
  )
}
