import React, { FC, useEffect } from 'react'
import AppRoute from './AppRoute'
import Navigation from './Navigation'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useActions, useAppSelector } from '../hooks/redux'

const App: FC = () => {
  const user = useAppSelector(state => state.user)
  const { setUser } = useActions()
  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {      
      if (user) {
        setUser({
          id: user.uid,
          login: user.reloadUserInfo.screenName,
          img: user.photoURL,
          isAuth: true,
          isLoading: false,
        })
      } else {
        setUser({
          id: '',
          login: '',
          img: '',
          isAuth: false,
          isLoading: false,
        })
      }
    });
  }, [])
  return (
    !user.isLoading ? <>
      <Navigation />
      <AppRoute />
    </> : <></>
  )
}

export default App