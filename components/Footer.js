import React from 'react'

export default function Footer() {
  return (
    <section className='container-fluid footer'>
      <div className="container">
          <div className="footer__container">
            <div className="footer__lore">
              <h2 className="footer__lore-title">Let’s Make Something <br />Amazing Together</h2>
              <p className="footer__lore-subtitle">Start by <span className="color-naranja underline">saying hi</span></p>
              <span className='d-none d-md-block'></span>
            </div>
            
            <div className="footer__cont">
              <div className="footer__cont-info">
                <h5 className='footer__cont-title'>Información</h5>
                <address className='footer__cont-adress'>Ibagué, Tolima - Col</address>
              </div>
                <ul className="navbar-nav d-flex flex-column flex-grow-1 ">
                  <li className="navbar-item my-2">
                    <a className="navbar-link active" aria-current="page" href={'#'}>Services</a>
                  </li>
                  <li className="navbar-item my-2">
                    <a className="navbar-link active" aria-current="page" href={'#'}>Proyectos</a>
                  </li>
                  <li className="navbar-item my-2">
                    <a className="navbar-link active" aria-current="page" href={'#'}>Notas</a>
                  </li>
                  <li className="navbar-item my-2">
                    <a className="navbar-link active" aria-current="page" href={'#'}>Experiencia</a>
                  </li>
                </ul>
            </div>
            <span className='d-none d-md-block'></span>
        </div>

        <div className='footer__copyright'>
          <p className='footer__copyright-title'>Power By <span className='footer__copyright-title footer__copyright-title--devkoore'>DevKoore</span><br /> con <span className='footer__copyright-title--hear footer__copyright-title--heart'>♥</span></p>
        </div>

      </div>
    </section>
  )
}