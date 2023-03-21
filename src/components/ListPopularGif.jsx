import React from "react"
import { useHookGif } from "../hook/UseHookGif"
import { Link } from "wouter"
import '../styles/ListPopularGif.css'

export function ListPopularGif () {
    const {gifies} = useHookGif()
    return (
        <section className="container--links__popularGif">
            {gifies.map(res => {
                return (
                    <div className="Box--links__populargifs">
                        <Link className="links--populargifs" key={res.id} to={`/popular-gif/${res.title}`}>{res.title}</Link>
                    </div>
                )
            })}
        </section>
    )
}
