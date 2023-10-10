import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import HinkaliPage from './pages/HinkaliPage'
import MainMealsPage from './pages/MainMealsPage'
import HachapuriPage from './pages/HachapuriPage'
import DrinksPage from './pages/DrinksPage'
import RegistrationPage from './pages/AuthAndRegPage'
import CartPage from './pages/CartPage'
import AuthAndRegPage from './pages/AuthAndRegPage'
import Head from './component/Head'
import ProfilePage from './pages/ProfilePage'
import {Context} from './index'
import Foot from './component/Foot'
import MainInfo from './component/MainInfo'
import AppRouter from './component/AppRouter'

function App() {
  const {user} = useContext(Context)
  console.log('store users: ', user)
  return (
   <>
      <BrowserRouter>
      {/* <AppRouter/> */}
          <Head/>
          <Routes>
            <Route path='/main' element={<IndexPage/>}/>
            <Route path='/authreg' element={<AuthAndRegPage/>}/>
            <Route path='/profile' element={<ProfilePage/>}/>
            <Route path='/hinkali' element={<HinkaliPage/>}/>
            <Route path='/hachapuri' element={<HachapuriPage/>}/>
            <Route path='/mainmeals' element={<MainMealsPage/>}/>
            <Route path='/drinks' element={<DrinksPage/>}/>
            <Route path='/cart' element={<CartPage/>}/>
          </Routes>
          <Foot/>
      </BrowserRouter>

   </>
  )
}

export default App
