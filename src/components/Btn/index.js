import React from 'react'
import styles from './style.module.css';
import { Link } from 'react-router-dom';

export default function Btn({ children, type, onClick, linkTo }) {
  return <div className={styles.btnContainer + "  border-dark border border-5 pb-3 rounded-3 p-0 m-0"} style={{width:"fit-content"}}>
    {type === "button" ? (
      <button className={`${styles.btn} fs-1 btn px-5 bg-yellow rounded-2`} onClick={onClick ? onClick : () => { }}><span className='px-3'>{children}</span></button>
    ) : (
      <Link className={`${styles.btn} fs-1 btn px-5 bg-yellow rounded-2`} to={linkTo ? linkTo : "#"}>
        <span className='px-3'>{children}</span>
      </Link>
    )}
  </div>
}
