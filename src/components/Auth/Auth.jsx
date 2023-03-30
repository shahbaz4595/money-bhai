import Tagline from '../TypedText/Tagline'
import style from './Auth.module.css'
import { LoginForm, SignupForm } from '../../ui/bleedBlueReact'
import { useSignup } from '../../hooks/useSignup'

const Auth = ({ type = 'login' }) => {
  const { signup, isLoading, error } = useSignup()

  return (
    <>
      <section className={style['auth-page']}>
        <div className={style.tagline}>
          <Tagline />
        </div>
        {!isLoading && (
          <div className={style['auth-form']}>
            {type === 'login' ? (
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
        )}
      </section>
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
    </>
  )
}

export default Auth
