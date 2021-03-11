import React, {createContext, useReducer, useEffect, useRef} from 'react'



const URL = "https://restcountries.eu/rest/v2/all";


type languages = {
  iso639_1: string
  iso639_2: string
  name: string
  nativeName: string
}

type currencies = {
  code: string,
  name: string,
  symbol: string

}

type DataCountry = {
   
        name?: string,
        topLevelDomain: string[],
        alpha2Code: string,
        alpha3Code: string,
        callingCodes: string[],
        capital: string,
        altSpellings: 
          string[],
        region: string,
        subregion: string,
        population: number,
        latlng: number[],
        demonym: string,
        area: number,
        gini: number,
        timezones: string[]
        borders: string[],
        
        nativeName: string,
        numericCode: string,
        currencies: currencies[],
        languages: languages[],
        translations:string[],
        flag: string,
        regionalBlocs: string[],
        cioc: string
}




type State = {
  countries: DataCountry[],
 
  
}
    
const initialValue: State = {
     countries: [],
  



}



type Action = {
  type: "COUNTRY_DATA",
  payload: DataCountry[],
  
}

export const GlobalContext = createContext(initialValue)


function reducer(state: State, action: Action) {
  switch(action.type){
    case "COUNTRY_DATA" :
      return {countries: action.payload}
      default:
        return state
  }
 
}

export const GlobalProvider: React.FC = ({children}) => {
const [state, dispatch] = useReducer(reducer, initialValue)
    const fetchCountry = async () => {
        const countryData = await fetch(URL)
        const result = await countryData.json();
        console.log(result);
        
        dispatch({type: "COUNTRY_DATA", payload: result})
           
    }

useEffect(() => {
  fetchCountry()
}, [])


type InputValue = {
  value: string
}


type State2 = {
  
}
 

    return (
        <GlobalContext.Provider value={{countries: state.countries}}>
            {children}
        </GlobalContext.Provider>
    )
 }

export default GlobalContext