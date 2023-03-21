import React, { useState } from "react";

const gifContext = React.createContext()

export function GifContextProvider ({ children }) {

    const [ gifies, setGifies ] = useState([])

    return (<gifContext.Provider value={{gifies, setGifies}}>
        {children}
    </gifContext.Provider>)
}

export default gifContext;