import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import ICON_WHATSAPP from '@/public/assets/home/nav/icon-whatsapp.svg'

export default function Nav() {
  return (
    <nav className="navbar container-fluid fixed-top">
      <div className="container navbar__container m-0 m-auto gap-md-5">
        <Link className="navbar-brand" href="/">&#60;/Dani Dev&#62;</Link>


        <ul className="navbar-nav d-none d-md-flex flex-row justify-content-evenly align-items-center flex-grow-1 ">
          <li className="navbar-item my-2">
            <a className="navbar-link active" aria-current="page" href={'#'}>Services</a>
          </li>
          <li className="navbar-item my-2">
            <a className="navbar-link active" aria-current="page" href={'#'}>Proyectos</a>
          </li>
          <li className="navbar-item my-2">
            <a className="navbar-link active" aria-current="page" href={'#'}>Notas</a>
          </li>
          <li className="navbar-item my-2">
            <a className="navbar-link active" aria-current="page" href={'#'}>Experiencia</a>
          </li>
        </ul>

        <ul className='navbar-nav d-none d-lg-flex'>
        <li className="nav-item my-2 d-none d-lg-block">
            <a className="navbar-link navbar-link
            navbar-link--whatsapp active" aria-current="page" href={'#'}>+57 323 2413836</a>
          </li>
        </ul>

        <button className="navbar-toggler d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">&#60;/Dani Dev&#62;</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center align-items-center flex-grow-1 ">
              <li className="nav-item my-2">
                <a className="navbar-link active" aria-current="page" href={'#'}>Services</a>
              </li>
              <li className="nav-item my-2">
                <a className="navbar-link active" aria-current="page" href={'#'}>Proyectos</a>
              </li>
              <li className="nav-item my-2">
                <a className="navbar-link active" aria-current="page" href={'#'}>Notas</a>
              </li>
              <li className="nav-item my-2">
                <a className="navbar-link active" aria-current="page" href={'#'}>Experiencia</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}