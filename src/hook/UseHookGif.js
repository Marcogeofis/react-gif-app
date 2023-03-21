import React, { useState, useEffect } from 'react'
import gifService from '../service/gifs.service'

function useHookGif (word) {
    const keyword = word;

    const [ gifies, setGifies ] =useState([])

    useEffect(() => {
        gifService(keyword)
            .then(res => {
            const gifies = res.data;
            setGifies(gifies)
            })

    },[keyword])
    
    return {gifies};
}

export { useHookGif }