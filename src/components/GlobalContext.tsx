import React, {createContext} from 'react'



const URL = "https://restcountries.eu/rest/v2/all";


const initialValue = {
    datas:   async function datas () {
    const response = await fetch(URL.toString())
    const data = await response.json;
    console.log(data);
    
}
}

const GlobalContext = createContext(initialValue)

export const GlobalProvider: React.FC = ({children}) => {



    return (
        <GlobalContext.Provider value={initialValue}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext