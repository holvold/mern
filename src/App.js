import React, { useState, useCallback } from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Users from './user/pages/Users'
import MainNavigation from './shared/components/Navigation/MainNavigation'
import UserPlaces from './places/pages/UserPlaces'
import UpdatePlace from './places/pages/UpdatePlace';
import NewPlace from './places/pages/NewPlace'
import Auth from './user/pages/Auth'
import { AuthContext } from './shared/context/auth-context'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = useCallback(() => {
    setIsLoggedIn(true)
  }, [])

  const logout = useCallback(() => {
    setIsLoggedIn(false)
  }, [])

  let routes

  if (isLoggedIn) {
    routes = (
      <Routes>
        <Route path='/' exact='true' element={<Users />} />
        <Route path='/:userId/places' exact='true' element={<UserPlaces />} />
        <Route path='/places/new' exact='true' element={<NewPlace />} />
        <Route path='/places/:placeId' exact='true' element={<UpdatePlace />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    )
  } else {
    routes = (
      <Routes>
        <Route path='/' exact='true' element={<Users />} />
        <Route path='/:userId/places' exact='true' element={<UserPlaces />} />
        <Route path='/auth' exact='true' element={<Auth />} />
        <Route path="*" element={<Navigate replace to="/auth" />} />
      </Routes>
    )
  }


  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout}}>
      <Router>
          <MainNavigation />
          <main>
            {routes}
          </main>
      </Router>
    </AuthContext.Provider>
)}

export default App;
