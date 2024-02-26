import Image from 'next/image'
import React from 'react'
import ICON_LINE from '@/public/assets/icons/icon-line.svg'
import ICON_LG_LINE from '@/public/assets/icons/icon-lg-line.svg'
import ICON_CIRCLE from '@/public/assets/icons/icon-circle.svg'
import ICON_LG_CIRCLE from '@/public/assets/icons/icon-lg-circle.svg'

import business from '@/data/business.json'

export default function Experiencies() {
    return (
        <section className='container-fluid experiencies'>
            <div className="container experiencies-container">
                <div className="row">
                    <div className="col-12">
                        <h2 className='experiencies__title'>My Work Experience</h2>
                    </div>
                </div>

                <div className="row experiencies__info">
                    <div className="col-lg-5 d-none d-lg-block">
                        <div className='d-lg-flex flex-lg-column justify-content-ls-between align-items-lg-start'>
                            {
                                business.map(item => (
                                    <section key={item} className='experiencies__business'>
                                        <h4 className='experiencies__business-name'>{item.name}</h4>
                                        <p className='experiencies__business-date'>{item.date}</p>
                                    </section>
                                ))
                            }
                        </div>
                    </div>

                    <div className="col-2 col-lg-2">
                        <section className='experiencies__timeline d-flex flex-column justify-content-center align-items-center'>
                            {
                                business.map(item => (
                                    <>
                                        <div key={item.id} className="experiencies__timeline-squere">
                                            <span className='experiencies__timeline-squere-circle' style={{backgroundColor: item.color}} />

                                            <div className="">
                                                <Image className='d-lg-none' src={ICON_CIRCLE} alt="Icon Circle" />
                                            </div>

                                            <div className="">
                                                <Image className='d-none d-lg-block' src={ICON_LG_CIRCLE} alt="Icon Circle" />
                                            </div>
                                        </div>

                                        <div className="experiencies__timeline-divisor d-lg-none">
                                            <Image src={ICON_LINE} alt="Icon Line" />
                                        </div>

                                        <div className="experiencies__timeline-divisor d-none d-lg-block">
                                            <Image src={ICON_LG_LINE} alt="Icon Line" />
                                        </div>
                                    </>
                                ))
                            }
                        </section>
                    </div>

                    <div className="col-10 col-lg-5">
                            {
                                business.map(item => (
                                    <section key={item.id} className='experiencies__business'>
                                        <div className="experiencies__business-df">
                                            <h3 className='experiencies__business-position'>{item.position}</h3>
                                            <p className='experiencies__business-description'>{item.description}</p>
                                        </div>
                                        <section className='d-block d-lg-none'>
                                            <h4 className='experiencies__business-name'>{item.name}</h4>
                                            <p className='experiencies__business-date'>{item.date}</p>
                                        </section>
                                    </section>
                                ))
                            }
                    </div>
                </div>
            </div>
        </section>
    )
}
