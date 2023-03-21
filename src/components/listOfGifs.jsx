import React from 'react'
import '../styles/ListOfGifs.css'

function ListOfGifs ({id, title, images}) {

    return (
        <section className='container--listOfGif'>
            <section className='box--listOfGif__data'>
                <div className='listOfGif--text'>
                    <span className='gif--text'>{id}</span>
                    <span className='gif--text'>{title}</span>
                </div>
                <img className='imgGif' src={images.original.url} alt={title}/>
            </section>
        </section>
    );
}

export { ListOfGifs}