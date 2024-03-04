import Head from 'next/head'
import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout ({ children, title, description }) {
  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
  }, [])
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}