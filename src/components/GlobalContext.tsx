import React, {createContext} from 'react'



const URL = "https://restcountries.eu/rest/v2/all";


type state = {

   
        "name": string,
        "topLevelDomain": [
          string
        ],
        "alpha2Code": string,
        "alpha3Code": string,
        "callingCodes": [
          string
        ],
        "capital": string,
        "altSpellings": [
          string,
          string
        ],
        "region": string,
        "subregion": string,
        "population": number,
        "latlng": [
          number,
          number
        ],
        "demonym": string,
        "area": number,
        "gini": number,
        "timezones": [
          string
        ],
        "borders": [
          string,
          string,
          string,
          string,
          string,
          string
        ],
        "nativeName": string,
        "numericCode": string,
        "currencies": [
          {
            "code": string,
            "name": string,
            "symbol": string
          }
        ],
        "languages": [
          {
            "iso639_1": string,
            "iso639_2": string,
            "name": string,
            "nativeName": string
          },
          {
            "iso639_1": string,
            "iso639_2": string,
            "name": string,
            "nativeName": string
          },
          {
            "iso639_1": string,
            "iso639_2": string,
            "name": string,
            "nativeName": string
          }
        ],
        "translations": {
          "de": string,
          "es": string,
          "fr": string,
          "ja": string,
          "it": string,
          "br": string,
          "pt": string,
          "nl": string,
          "hr": string,
          "fa": string
        },
        "flag": string,
        "regionalBlocs": [
          {
            "acronym": string,
            "name": string,
            "otherAcronyms": [
              
            ],
            "otherNames": [
              
            ]
          }
        ],
        "cioc": string
      }
    
const initialValue = {
     country: []
}


const GlobalContext = createContext(initialValue)

export const GlobalProvider: React.FC = ({children}) => {

    const fetchCountry = async () => {
        const countryData = await fetch(URL)
        const result = countryData.json
        return result
           
    }

    

  fetchCountry()

    return (
        <GlobalContext.Provider value={initialValue}>
            {children}
        </GlobalContext.Provider>
    )
 }

export default GlobalContext