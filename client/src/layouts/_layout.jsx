import React from 'react'
import Footer from './footer'
import Nav from './nav'

const Layout = ({ children }) => {
  return (
    <div className='font-mono  m-4'>
      <Nav />
      <main className='min-h-screen pt-8'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
