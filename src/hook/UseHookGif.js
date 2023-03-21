import React, { useState, useEffect } from 'react'
import gifService from '../service/gifs.service'

function useHookGif (keyword) {

    const [ gifies, setGifies ] = useState([])
    const [ loading, setLoading ] =useState(false)

    // Llamo la keyword del localStorage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

    useEffect(() => {
        setLoading(true)
        gifService({ keyword: keywordToUse })
            .then(res => {
                const gifies = res.data;
                setGifies(gifies)
                setLoading(false)
                localStorage.setItem('lastKeyword', keyword) // guardo la keyword en el local storage
            })

      },[keyword, keywordToUse, setGifies])

    return {loading, gifies};
}

export { useHookGif }