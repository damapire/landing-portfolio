import React from 'react'

import services from '@/data/services.json'

export default function AboutMe() {
  return (
    <section id='services' className='container-fluid services'>
      <div className="container">
        <div className="row">
          <div className="col-md-6 order-1 order-md-0">      
            <div className="services__wrapper-items">
              {
                services.map(item => (
                  <section className='services__item d-flex align-items-center' key={item}>
                    <figure className='services__item-wrapper-icon' style={{backgroundColor: item.bgColor}}>
                      <img src={item.icon} alt={`Icon ${item.title}`} className='services__item-icon' />
                    </figure>
                    <div>
                      <h3 className='services__item-title'>{item.title}</h3>
                      <p className='services__item-subtitle'>{item.subtitle}</p>
                    </div>
                  </section>
                )) 
              }
            </div>
          </div>
          <div className="col-md-6 order-0 order-md-1">
            <h2 className='services__title'>What do I help?</h2>
            <p className='services__text'>I will hel you with finging a solution and solve
              your problems. We use process design to create digital products. Besids that also help their business</p>
              <p className='services__text d-none d-md-block'>We use process design to create digital products. Besids that also help their business</p>
              <section className='services__info'>
              <div>
                  <strong className='services__info-title'>285+</strong>
                  <p className='services__info-subtitle'>Project Complete</p>
                </div>
                <div>
                  <strong className='services__info-title'>190+</strong>
                  <p className='services__info-subtitle'>Happy Clients</p>
                </div>
              </section>
          </div>
        </div>
      </div>
    </section>
  )
}