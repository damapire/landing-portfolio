import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import testimonials from '@/data/testimonials.json'
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
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        spaceBetween={50}
                        slidesPerView={1}
                        loop
                        breakpoints={{
                            768: {
                                slidesPerView: 2.5,
                                centeredSlides: true,
                                initialSlide: 1,
                                spaceBetween: 100,
                            }
                        }}
                    >
                        {
                            testimonials.map((testimonials) => (
                                <SwiperSlide key={testimonials.id}>
                                    {({ isActive }) => (
                                        <section className={`testimonials__card ${isActive ? 'active' : ''}`}>
                                            <Image src={testimonials.avatar} width={30} height={20} alt='Avatar' className='testimonials__card-avatar' />
                                            <p className='testimonials__card-text'>{testimonials.text}</p>
                                            <hr className='testimonials__card-divisor' />
                                            <h3 className='testimonials__card-name'>{testimonials.name}</h3>
                                            <h4 className='testimonials__card-position'>{testimonials.position}</h4>
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