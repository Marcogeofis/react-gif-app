import React, { useState } from 'react'
import { useLocation } from 'wouter'
import { ListPopularGif } from '../components/ListPopularGif'
import '../styles/Home.css'

function Home () {
    const [ keyword, setKeyword ] = useState('')
    const [ path, pushLocation ] = useLocation()

    const handleSubmit = (e) => {
      e.preventDefault()
      if(keyword === ''){
        alert('no puede estar vacio el campo')
      } else {
        pushLocation(`/gif/${keyword}`)
      }
      
    }
    const handleChange = (e) => {
      setKeyword(e.target.value)
    }

    return (
        <section className='container--Home'>
            <img className="img--lupa__search" src={require('../assets/lupa.png')} alt="Imagen de una lupa" />
            <h2>Buscador de gif </h2>
            <form onSubmit={handleSubmit}>
                <input className='input--search' type='text' onChange={handleChange} value={keyword}/>
                <button className='button--search'>Buscar</button>
            </form>
            <div>
                <h3>Mira los gifs populares</h3>
                <ListPopularGif />
            </div>
        </section>
    )
}

export {Home};