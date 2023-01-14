import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import FavouritesPage from '../pages/FavouritesPage'
import UserPage from '../pages/UserPage'
import { privateRoutes, publicRoutes } from '../routes/route'
import { useAppSelector } from '../hooks/redux'

const AppRoute: FC = () => {
  const auth = useAppSelector(state => state.user).isAuth
  return (

    <Routes>
      {auth ? privateRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      )) : publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>

  )
}

export default AppRoute