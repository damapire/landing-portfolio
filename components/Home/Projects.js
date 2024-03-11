import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';
import Link from 'next/link';

import projects from '@/data/projects.json'

export default function Projects() {
    return (
        <section className="container-fluid projects">
            <div className="container">
                <div className="row">
                    <div className="col-12 container d-flex justify-content-between align-items-lg-center container">
                        <div>
                            <h2 className='projects__title'>Projects</h2>
                            <p className='projects__subtitle'>Perfect solutions for digital experience</p>
                        </div>
                        <Link href={'#'} className='projects__explore d-none d-md-block'>
                                Explore More Works
                        </Link>
                    </div>
                    <div className="col-12">
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={1.2}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            loop
                            navigation={true}
                            modules={[Autoplay, Navigation]}
                            breakpoints={{
                                375:{
                                    slidesPerView: 1.4,
                                },
                                425:{
                                    slidesPerView: 1.6,
                                },
                                520:{
                                    slidesPerView: 2.1,
                                },
                                1200:{
                                    slidesPerView: 2.5,
                                },
                                1440:{
                                    slidesPerView: 2.8,
                                }
                            }}
                            className='projects__swiper'
                        >
                            {
                                projects.map((projects) => (
                                    <SwiperSlide key={projects.id}>
                                        <section className="projects__item" style={{backgroundColor: projects.bgColor}}>
                                            <h3 className='projects__item-title'>{projects.title}</h3>
                                            <p className='projects__item-subtitle'>{projects.subtitle}</p>
                                            {
                                                projects.imageCover ? (
                                                    <img src={projects.imageCover} alt={`Image ${projects.title}`}
                                                    className='projects__item-img'/>
                                                ) : ''
                                            }
                    
                                        </section>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}