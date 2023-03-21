import React from 'react'

function ListOfGifs ({id, title, images}) {

    return (
        <section>
            <section>
                <h2> All Gifs</h2>
            </section>
            <section>
                <p>{id}</p>
                <p>{title}</p>
                <img src={images.original.url} alt={title}/>
            </section>
        </section>
    );
}

export { ListOfGifs}