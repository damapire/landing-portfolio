import React from 'react'

export default function Nav() {
    return (
        <ul className="nav d-none d-md-flex">
            <li className="nav-item my-2">
                <a className="nav-link active" aria-current="page" href={'#'}>Services</a>
            </li>
            <li className="nav-item my-2">
                <a className="nav-link active" aria-current="page" href={'#'}>Proyectos</a>
            </li>
            <li className="navbar-item my-2">
                <a className="nav-link active" aria-current="page" href={'#'}>Notas</a>
            </li>
            <li className="navbar-item my-2">
                <a className="nav-link active" aria-current="page" href={'#'}>Experiencia</a>
            </li>
        </ul>
    )
}
