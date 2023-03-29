import Tagline from '../TypedText/Tagline'
import style from './Auth.module.css'
import { LoginForm, SignupForm } from '../../ui/bleedBlueReact'

const Auth = ({ type = 'login' }) => {
  return (
    <section className={style['auth-page']}>
      <div className={style.tagline}>
        <Tagline />
      </div>
      <div className={style['auth-form']}>
        {type === 'login' ? (
          <LoginForm
            onSubmit={(data) => {
              console.log(data)
            }}
          />
        ) : (
          <SignupForm />
        )}
      </div>
    </section>
  )
}

export default Auth
