import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import BADGE_MINTIC from '@/public/assets/home/badge-mintic.png'
import IMG_DEV from '@/public/assets/home/avatar-dev.png'

export default function Hero () {
  return (
    <section className='container-fluid hero d-sm-flex align-items-start'>
      <div className='row hero__width'>
        <section className='row col-sm-4 hero__width-row'>
          <h1 className='hero__title'>Hey There,<br/> I’m Daniel</h1>
          <Link href='#' className='d-none d-lg-block hero__email'>danipinto.dev@gmail.com</Link>
          <div className='d-none d-sm-block'>
            <div className="hero__experiencies">
              <strong className='hero__experiencies-number'>3</strong>
              <p className='hero__experiencies-years'>Years Experiences</p>
            </div>
          </div>
        </section>

        <section className='row col-sm-4 position-relative hero__width-row hero__width-row--2'>
          <p className='hero__subtitle d-md-block'>I design beautifully simple things, <br/> And I love what i do</p>
          
          <figure className='hero__badge p-0'>
            <Image className='hero__badge-img' src={BADGE_MINTIC} alt='Badge Mintic' />
          </figure>
            <p className='hero__position d-none d-sm-block'>FullStack <br />JavaScript <br />Developer</p>
        </section>
      </div>
    </section>
  )
}