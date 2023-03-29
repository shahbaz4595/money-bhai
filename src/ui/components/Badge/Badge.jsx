import Icon from '../../fragments/Icon/Icon'
import Avatar from '../Avatar/Avatar'
import style from './Badge.module.css'

const Badge = ({
  type = 'basic-badge',
  badgeText,
  imgSource,
  imgCaption,
  size = 'md',
  variant = 'danger',
  children = 'dummy text',
  count = 0,
  className = '',
  icon,
  ...rest
}) => {
  className = `${style['badge-container']} ${className}`
  return (
    <div className={className} {...rest}>
      {type === 'basic-badge' && (
        <span className={`${style[`basic-badge`]} ${style[variant]}`}>
          {children}
        </span>
      )}

      {type === 'avatar-badge' && (
        <>
          <Avatar
            imgSource={imgSource}
            imgCaption={imgCaption}
            size={size}
            variant={variant}
          />
          <span
            className={`${style[type]} ${style[`badge-${variant}`]} ${
              style[size]
            }`}
          ></span>
        </>
      )}

      {type === 'icon-badge' && (
        <>
          <Icon type={icon} size={size} />
          <span
            className={`${style['icon-badge']} ${style[`badge-${icon}`]}  ${
              style[`badge-${variant}`]
            } ${style[size]}`}
          >
            {count}
          </span>
        </>
      )}
    </div>
  )
}

export default Badge
