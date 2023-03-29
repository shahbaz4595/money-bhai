import style from './LoginForm.module.css'
import { Button, Input } from '../../bleedBlueReact'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isFormValid, setIsFormValid] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    onSubmit({ email: email, password: password })
  }

  const guestLoginHandler = (e) => {
    e.preventDefault()
    onSubmit({
      email: process.env.REACT_APP_GUEST_EMAIL,
      password: process.env.REACT_APP_GUEST_PASSWORD,
    })
  }

  const checkFormValidity = () => {
    if (email && email.includes('@') && password && password.length > 7) {
      setIsFormValid(true)
    } else {
      setIsFormValid(false)
    }
  }
  return (
    <form className={style['login-form']} onSubmit={handleLogin}>
      <h2 className={style['form-title']}>Log in</h2>
      <label>
        <p>Email</p>
        <Input
          onChange={(e) => {
            setEmail(e.target.value)
            checkFormValidity()
          }}
          placeholder='Enter Email'
          variant='email'
          value={email}
          className={style['form-field']}
        />
      </label>
      <label>
        <p>Password</p>
        <Input
          onChange={(e) => {
            setPassword(e.target.value)
            checkFormValidity()
          }}
          placeholder='Enter Password'
          variant='password'
          value={password}
          className={style['form-field']}
        />
      </label>
      <Button size='medium' variant='primary' disabled={!isFormValid} id='user'>
        Log in
      </Button>
      <Button
        size='medium'
        variant='inverse'
        id='guest'
        onClick={guestLoginHandler}
      >
        Guest
      </Button>
      <Link to={'/reset'}>Forgot Password</Link>

      <p>
        Don't have an account ? <Link to={'/signup'}>Sign up</Link>
      </p>
    </form>
  )
}

export default LoginForm
