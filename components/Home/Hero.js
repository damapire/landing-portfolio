import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import BADGE_MINTIC from '@/public/assets/home/badge-mintic.png'
import IMG_DEV from '@/public/assets/home/avatar-dev.png'

export default function Hero() {
  return (
    <section className='container-fluid hero'>
      <div className="container h-md-100 h-md-100">
        <div className="row h-md-100">
          <section className='col-md-6 hero__info d-md-flex flex-column'>
            <h1 className='hero__info-title'>Hey There,<br /> I’m Daniel</h1>
            <Link href='#' className='d-none d-lg-block hero__info-email'>danipinto.dev@gmail.com</Link>
            <div className="hero__info-experiencies d-none d-md-flex">
              <strong className='hero__info-number'>3</strong>
              <p className='hero__info-years'>Years <br /> Experiences</p>
            </div>
          </section>

          <section className='col-md-6 hero__info hero__info--data d-md-flex flex-column'>
            <p className='hero__info-subtitle d-md-block'>I design beautifully simple things,<br /> And I love what i do</p>

            <div>
              <figure className='hero__info-badge'>
                <Image className='hero__info-badge-img' src={BADGE_MINTIC} alt='Badge Mintic' />
              </figure>
              <p className='hero__info-position d-none d-md-block'>FullStack <br />JavaScript <br />Developer</p>
            </div>
            <div></div>
          </section>
        </div>
      </div>
    </section>
  )
}