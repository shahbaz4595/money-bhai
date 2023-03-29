import Typed from 'typed.js'
import style from './Tagline.module.css'
import { useRef, useEffect } from 'react'

const Tagline = () => {
  const typedText = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedText.current, {
      strings: ['Aamdani 💰', 'Atthanni 🪙', 'Kharcha 💸', 'Rupaiyya 💵'],
      typeSpeed: 50,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div className={style.tagline}>
      Track your <span className={style['typed-text']} ref={typedText} />
    </div>
  )
}

export default Tagline
