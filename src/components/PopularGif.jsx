import React from "react"
import { ListOfGifs } from "./listOfGifs"
import { useHookGif } from "../hook/UseHookGif"
import '../styles/PopularGifs.css'
import { Link } from "wouter"

export function PopularGif ({ params }) {
    const {keyword} = params
    const { gifies } = useHookGif(keyword)

    return (
        <div>
            <div>
                <h2>All popular gifs</h2>
                <Link className="return--home" to="/">Regresar al inicio</Link>
            </div>
            <section className="container--allPopularList">
                {gifies.map(res => {
                        return (
                            <ListOfGifs 
                                key={res.id}
                                title={res.title}
                                images={res.images}
                            />
                        )
                    })}
            </section>
        </div>
    )
}
