
import { Navigate, Route, Routes } from 'react-router-dom'

import { DCPages, MarvelPage } from '../heroes'
import { LoginPage } from '../auth'
import { Navbar } from '../ui'

export const AppRouter = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path='marvel' element={<MarvelPage/>}/>
            <Route path='dc' element={<DCPages/>}/>
            <Route path='login' element={<LoginPage/>}/>

            <Route path='/' element={<Navigate to="/marvel"/>}/>
        </Routes>
    </>
  )
}
