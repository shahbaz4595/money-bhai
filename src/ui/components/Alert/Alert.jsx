import React from 'react'
import '../../style.css';
import style from './Alert.module.css'

const Alert = ({
  variant = 'primary',
  size = 'medium',
  onClose,
  children,
  className = '',
  ...rest
}) => {
  className =
    `${style.alert} ${style[variant]} ${style[size]} ${className}`.trim()
  return (
    <div className={className} {...rest}>
      <div> {children}</div>
      <button
        className={style.close}
        onClick={onClose}
        aria-label='close alert'
      >
        &times;
      </button>
    </div>
  )
}

export default Alert
