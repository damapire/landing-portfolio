import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import AVATAR from '@/public/assets/home/avatar-1.png'
import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className='container-fluid testimonials'>
        <div className="row">
            <div className="col-12">
                <h2 className='testimonials__title'>People Talk About Me</h2>
                <p className='testimonials__subtitle mb-0'>I got a job that was in accordance with the salary and field of word. The process of submitting an application was quite cosy.</p>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop    
                breakpoints={{
                    768: {
                    slidesPerView: 2.5,
                    centeredSlides: true,
                    initialSlide: 1,
                    spaceBetween: 100,
                    },
                    1440: {
                        slidesPerView: 3,
                        centeredSlides: true,
                        initialSlide: 1,
                        spaceBetween: 250
                    }
                }}

            >
            {
                [1,2,3,4,5,6].map(index => (
                    <SwiperSlide key={index}>
                        {({ isActive }) => (
                            <section className={`testimonials__card ${isActive ? 'active' : ''}`}>
                                <Image src={AVATAR} alt='Avatar' className='testimonials__card-avatar' />
                                <p className='testimonials__card-text'>I got a job that was in accordance with the salary and field of word. The process of <br className='d-none d-lg-block' /> submitting an application was quite cosy. I got a job that was in accordance with the salary and field of word. </p>
                                <hr className='testimonials__card-divisor' />
                                <h3 className='testimonials__card-name'>John Allendone</h3>
                                <h4 className='testimonials__card-position'>CEO MoveBike</h4>
                            </section>
                        )}
                    </SwiperSlide>
                ))
            }
        </Swiper>
            </div>
        </div>
    </section>
  )
}