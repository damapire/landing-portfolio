import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import 'swiper/css/pagination';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';

const projects = [
    {
        id: 1,
        title: 'MoveBike',
        subtitle: 'Motorcycle rental platform',
        imageCover: '/assets/home/projects/img-movebike.png',
        bgColor: '#FE5F3B'
    },
    {
        id: 2,
        title: 'Academia Landrada',
        subtitle: 'Platform for training consultants',
        imageCover: '',
        bgColor: '#00B451'
    },
    {
        id: 3,
        title: 'Landing Page',
        subtitle: 'Investment Land Sales',
        imageCover: '',
        bgColor: '#3AACFF'
    },
    {
        id: 4,
        title: 'Landing Page',
        subtitle: 'Investment Land Sales',
        imageCover: '',
        bgColor: '#3AACFF'
    },
    {
        id: 5,
        title: 'Landing Page',
        subtitle: 'Investment Land Sales',
        imageCover: '',
        bgColor: '#3AACFF'
    }
]

export default function Projects() {
    return (
        <section className="container-fluid projects">
            <div className="row">
                <div className="col-12 d-flex justify-content-between">
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
                        pagination={{
                            clickable: true,
                          }}
                        navigation={true}
                        modules={[Autoplay, Navigation, Pagination]}
                        breakpoints={{
                            768:{
                                slidesPerView: 3,
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
        </section>
    )
}
