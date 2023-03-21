import React from "react";
import { Link } from "wouter";
import { ListOfGifs } from "./listOfGifs";
import { useHookGif } from "../hook/UseHookGif";
import { LoadingImage } from "./LoadinImage";
import '../styles/Gifs.css'

function Gif ({ params }) {

  // params es un objeto que me da cuando reviso con console.log(props) del Gif y este me da el keyword cuando uso Route
  const { keyword } = params
  const { loading, gifies } = useHookGif(keyword)

  return (
      <section>
        <div className="container--title">
          <h2>All gif about {keyword}</h2>
          <Link className="Link--Home" to="/">Regresar a Inicio</Link>
        </div>
        <div className="container-allGifs">
          {loading ? <LoadingImage /> : gifies.map(gif => {
              const { id, title, images } = gif
              return (
                  <ListOfGifs
                      key={id}
                      id={id}
                      title={title}
                      images={images}
                  />
                )
            })
          }
        </div>
      </section>
  );
}

export {Gif};