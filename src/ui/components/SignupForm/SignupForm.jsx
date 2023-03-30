import style from './SignupForm.module.css'
import { Button, Input } from '../../bleedBlueReact'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const SignupForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [isFormValid, setIsFormValid] = useState('')

  const handleSignup = (e) => {
    e.preventDefault()
    onSubmit({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    })
  }

  const checkFormValidity = () => {
    if (
      email &&
      email.includes('@') &&
      password &&
      password.length > 7 &&
      firstName &&
      lastName
    ) {
      setIsFormValid(true)
    } else {
      setIsFormValid(false)
    }
  }

  return (
    <form className={style['signup-form']} onSubmit={handleSignup}>
      <h2 className={style['form-title']}>Sign up</h2>
      <label>
        <p>First Name</p>
        <Input
          onChange={(e) => {
            setFirstName(e.target.value)
            checkFormValidity()
          }}
          placeholder='Enter First Name'
          variant='text'
          value={firstName}
          className={style['form-field']}
        />
      </label>
      <label>
        <p>Last Name</p>
        <Input
          onChange={(e) => {
            setLastName(e.target.value)
            checkFormValidity()
          }}
          placeholder='Enter Last Name'
          variant='text'
          value={lastName}
          className={style['form-field']}
        />
      </label>
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
          min='8'
        />
      </label>
      <Button size='medium' variant='primary' disabled={!isFormValid}>
        Sign up
      </Button>
      <p>
        Already have an account ? <Link to={'/login'}>Log in</Link>
      </p>
    </form>
  )
}

export default SignupForm
