import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import BADGE_MINTIC from '@/public/assets/home/badge-mintic.png'
import IMG_DEV from '@/public/assets/home/avatar-dev.png'

export default function Hero () {
  return (
    <section className='container-fluid hero d-lg-flex align-items-center'>
      <div className='row d-lg-flex align-items-center hero__width'>
        <section className='row col-lg-6 '>
          <h1 className='hero__title'>Hey There, I’m Daniel</h1>
          <Link href='#' className='d-none d-lg-block hero__email'>danipinto.dev@gmail.com</Link>
          <div className='d-none d-lg-block'>
            <div className="hero__experiencies">
              <strong className='hero__experiencies-number'>3</strong>
              <p className='hero__experiencies-years'>Years Experiences</p>
            </div>
          </div>
        </section>

        <section className='col-lg-6 position-relative'>
          <p className='hero__subtitle'>I design beautifully simple things, <br/> And I love what i do</p>
          <figure className='hero__badge p-0'>
            <Image src={BADGE_MINTIC} alt='Badge Mintic' />
          </figure>
          <div className='mx-auto my-0 text-center'>
            <Image src={IMG_DEV} width={350} height={400} alt='Foto Dev' className='hero__photo mx-auto' />
          </div>
          <p className='hero__position d-none d-md-block'>FullStack JavaScript Developer</p>
        </section>
      </div>
    </section>
  )
}