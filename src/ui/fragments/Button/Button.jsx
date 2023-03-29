import React from 'react'
import style from './Button.module.css'

const Button = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  children,
  onClick,
  className = '',
  ...rest
}) => {
  className = `${style.btn} ${style[variant]} ${style[size]} ${
    disabled ? style.disabled : ''
  } ${className}`.trim()
  return (
    <button
      onClick={onClick}
      className={className}
      aria-label={`${variant} button`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
