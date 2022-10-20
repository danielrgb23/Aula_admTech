import React from 'react'
import logo from '../../assets/logo.svg'
import './styles.css'

export function Header() {
  return (
    <header>
        <div className='dsmeta-logo-container'>
            <img src={logo} alt="dsMeta"/>
            <h1>DsMeta</h1>
            <p>
                Desenvolvido por 
                <a 
                href="https://www.linkedin.com/in/daniel-augusto02" 
                target='_blank'>@Daniel_augusto</a> 
            </p>
        </div>
    </header>
  )
}