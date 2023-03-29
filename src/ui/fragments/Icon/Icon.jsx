const sizeMap = {
  xs: 30,
  sm: 50,
  md: 70,
  lg: 90,
  xl: 110,
}

const Icon = ({ type = 'email', size = 'md', ...rest }) => {
  return (
    <>
      {type === 'email' && (
        <img
          alt='email'
          src={`https://img.icons8.com/ultraviolet/${sizeMap[size]}/null/filled-message.png`}
        />
      )}
      {type === 'bell' && (
        <img
          alt='bell'
          src={`https://img.icons8.com/ultraviolet/${sizeMap[size]}/null/appointment-reminders.png`}
        />
      )}
      {type === 'cart' && (
        <img
          alt='cart'
          src={`https://img.icons8.com/ultraviolet/${sizeMap[size]}/null/shopping-cart.png`}
        />
      )}
      {type === 'search' && (
        <img
          alt='search'
          src={`https://img.icons8.com/ultraviolet/${sizeMap[size]}/null/search--v1.png`}
        />
      )}
      {type === 'heart' && (
        <img
          alt='heart'
          src={`https://img.icons8.com/ultraviolet/${sizeMap[size]}/null/hearts.png`}
        />
      )}
      {type === 'heart-filled' && (
        <img
          alt='filled heart'
          src={`https://img.icons8.com/offices/${sizeMap[size]}/null/hearts.png`}
        />
      )}
      {type === 'star' && (
        <img
          alt='star'
          src={`https://img.icons8.com/color/${sizeMap[size]}/null/star--v1.png`}
        />
      )}
      {type === 'star-filled' && (
        <img
          alt='filled star'
          src={`https://img.icons8.com/fluency/${sizeMap[size]}/null/star.png`}
        />
      )}
      {type === 'star-half' && (
        <img
          alt='half filled star'
          src={`https://img.icons8.com/color/${sizeMap[size]}/null/star-half-empty.png`}
        />
      )}
    </>
  )
}

export default Icon
