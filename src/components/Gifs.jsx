import React, { useEffect, useState } from "react";
import { ListOfGifs } from "./listOfGifs";
import gifService from "../service/gifs.service";
// import { useHookGif } from "../hook/UseHookGif";

function Gif ({ params }) {

  // params es un objeto que me da cuando reviso con console.log(props) del Gif y este me da el keyword cuando uso Route
  const { keyword } = params
  const [ gifies, setGifies ] =useState([])
  const [ loading, setLoading ] =useState(false)
  useEffect(() => {
    setLoading(true)
    gifService({ keyword })
        .then(res => {
        const gifies = res.data;
        setGifies(gifies)
        setLoading(false)
        })

  },[keyword])

  if(loading) return <p>Estoy descargando la info.</p>

  return (
      <section>
        {gifies.map(gif => {
          const { id, title, images } = gif
          return (
              <ListOfGifs
                  key={id}
                  id={id}
                  title={title}
                  images={images}
              />
            )
        })}
      </section>
  );
}

export {Gif};