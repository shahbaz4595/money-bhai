import style from './Image.module.css'

const BBImage = ({
  type = 'regular',
  imgSource,
  imgCaption,
  className = '',
  ...rest
}) => {
  className = `${style.img} ${
    type === 'round' && style.round
  } ${className}`.trim()
  return (
    <img src={imgSource} alt={imgCaption} className={className} {...rest} />
  )
}

export default BBImage
