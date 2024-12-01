import { children, useContext } from "react";
import { useState } from "react";
import React from "react";
import getArt from "./services/getArt";

const AppContext = React.createContext();
const AppProvicer = ({children}) =>{
    const [query, setQuery] = useState('');
    //galvojau pasidaryti ir records, detalesniai paieskai, bet ten tik daugiau linku i kitas medziagas
    const [endpoint, setEndpoint] = useState('search.json');
    const [data, setData] = useState([]);
    const {isLoading, error, data: heritages} = getArt(endpoint,`&query=${query}`, query)
    return (
        <AppContext.Provider value={{isLoading, error, heritages, query, setQuery}}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = () =>{
    return useContext(AppContext)
}
export {AppContext, AppProvicer}