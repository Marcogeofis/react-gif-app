import React from 'react';
import '../styles/LoadingImage.css'
function LoadingImage () {
    return (
        <div className='container--Loading'>
            <img className='img--Loading' src={require('../assets/engrane.png')} alt="Imagen de engrane" />
            <p>Loading...</p>
        </div>
    )
}

export { LoadingImage }