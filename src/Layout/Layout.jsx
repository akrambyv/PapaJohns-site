import React from 'react'
import { Outlet } from 'react-router-dom'
// import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function Layout() {
  return (
    <>
        {/* <Header basket={basket} setBasket={setBasket} /> */}
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout