import React from 'react'
import style from './Center.module.css'

const Center = ({ children }) => {
  return <div className={style.center}>{children}</div>
}

export default Center
