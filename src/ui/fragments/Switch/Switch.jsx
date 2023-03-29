import style from './Switch.module.css'

const Switch = ({ type = 'theme', onSwitch, className = '', ...rest }) => {
  className = `${style['chk-input']} ${className}`.trim()
  return (
    <label className={style['toggle-switch']}>
      <input
        type='checkbox'
        className={className}
        {...rest}
        onChange={onSwitch}
      />
      <div className={`${style['slider-container']} ${style[type]}`}>
        <span className={style.slider}></span>
      </div>
    </label>
  )
}

export default Switch
