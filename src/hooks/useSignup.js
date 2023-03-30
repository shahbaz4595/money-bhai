import { useState } from 'react'
import { firebaseAuth } from '../firebase/config'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const signup = async (email, password, firstName, lastName) => {
    setError(null)
    setIsLoading(true)
    try {
      const res = await firebaseAuth.createUserWithEmailAndPassword(
        email,
        password
      )

      if (!res) {
        throw new Error('Could not complete signup')
      }
      // add display name of the user
      await res.user.updateProfile({ displayName: `${firstName} ${lastName}` })

      setIsLoading(false)
      setError(null)
    } catch (err) {
      setError(err.message)
      setIsLoading(false)
    }
  }

  return { error, isLoading, signup }
}
