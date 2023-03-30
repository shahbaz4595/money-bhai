import Tagline from '../TypedText/Tagline'
import style from './Auth.module.css'
import { LoginForm, SignupForm } from '../../ui/bleedBlueReact'
import { useSignup } from '../../hooks/useSignup'

const Auth = ({ type = 'login' }) => {
  const { signup, isLoading, error } = useSignup()

  return (
    <section className={style['auth-page']}>
      <div className={style.tagline}>
        <Tagline />
      </div>
      <div className={style['auth-form']}>
        {isLoading && type === 'login' ? (
          <LoginForm
            onSubmit={(data) => {
              console.log(data)
            }}
          />
        ) : (
          <SignupForm
            onSubmit={({ email, password, firstName, lastName }) =>
              signup(email, password, firstName, lastName)
            }
          />
        )}
      </div>
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
    </section>
  )
}

export default Auth
