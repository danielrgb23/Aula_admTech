import { useState } from 'react'
import { Header } from './components/Header'
import { SalesCard } from './components/SalesCard'

export function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <section id ="sales">
          <div className='dsmeta-container'>
            <SalesCard />
          </div>
        </section>
      </main>
    </div>
  )
}
