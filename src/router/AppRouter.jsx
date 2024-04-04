import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MarvelPage } from '../heroes/pages/MarvelPage'
import { DCPages } from '../heroes/pages/DCPages'
import { LoginPage } from '../auth/pages/LoginPage'

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='marvel' element={<MarvelPage/>}/>
            <Route path='dc' element={<DCPages/>}/>
            <Route path='login' element={<LoginPage/>}/>

            <Route path='/' element={<Navigate to="/marvel"/>}/>
        </Routes>
    </>
  )
}
