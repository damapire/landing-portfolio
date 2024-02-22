import React from 'react'

export default function AboutMe() {
  return (
    <section className='container-fluid services'>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-1 order-lg-0">      
            <div className="services__wrapper-items">
              {
                [1, 2, 3].map(index => (
                  <section className='services__item' key={index}>
                    <figure className='services__item-wrapper-icon'>
                      <img src="/assets/icons/icon-code.svg" alt={`Icon ${index}`} className='services__item-icon' />
                    </figure>
                    <div>
                      <h3 className='services__item-title'>Web Development</h3>
                      <p className='services__item-subtitle'>5 Projects</p>
                    </div>
                  </section>
                )) 
              }
            </div>
          </div>
          <div className="col-lg-6 order-0 order-lg-1">
            <h2 className='services__title'>What do I help?</h2>
            <p className='services__text'>I will hel you with finging a solution and solve
              your problems. We use process design to create digital products. Besids that also help their business</p>
              <p className='services__text'>We use process design to create digital products. Besids that also help their business</p>
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