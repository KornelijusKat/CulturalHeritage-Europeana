import { children, useContext } from "react";
import { useState } from "react";
import React from "react";
import getArt from "./services/getArt";

const AppContext = React.createContext();
const AppProvicer = ({children}) =>{
    const [query, setQuery] = useState('hi');
    const [endpoint, setEndpoint] = useState('search.json')
    const {isLoading, error, data : arts} = getArt(endpoint,`&query=${query}`)
    return (
        <AppContext.Provider value={{isLoading, error, arts, query, setEndpoint}}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = () =>{
    return useContext(AppContext)
}
export {AppContext, AppProvicer}