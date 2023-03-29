import BBImage from '../../fragments/Image/Image'
import React from 'react'
import style from './Avatar.module.css'

const Avatar = ({
  size = 'md',
  imgSource,
  imgCaption,
  className = '',
  variant = '',
  ...rest
}) => {
  className =
    `${style.avatar} ${style[size]} ${style[variant]} ${className}`.trim()
  return (
    <div className={className}>
      <BBImage
        imgSource={imgSource}
        imgCaption={imgCaption}
        size={size}
        type='round'
        {...rest}
      />
    </div>
  )
}

export default Avatar
