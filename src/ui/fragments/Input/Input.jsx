import React from 'react'
import style from './Input.module.css'

const Input = ({
  variant = 'text',
  placeholder,
  className = '',
  onChange,
  ...rest
}) => {
  className = `${style.input} ${className}`.trim()
  return (
    <input
      onChange={onChange}
      type={variant}
      placeholder={placeholder}
      className={className}
      {...rest}
    />
  )
}

export default Input
