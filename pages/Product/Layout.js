import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

function Layout({children}) {
    var name ='seyi'
  return (
    <div>
      <NavBar name={name}/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout