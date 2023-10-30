import {createContext } from "react";

export const DetailsContext = createContext()

export const DetailsContextProvider = ({children})=>{
    return(
    <DetailsContext.Provider value={{todayDate: '05.10.23'}}>
        {children}
    </DetailsContext.Provider>)
}