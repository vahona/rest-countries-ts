import React, {useContext, useState} from 'react'
import GlobalContext from '../components/GlobalContext'



export const  FlagCountry = () => {
 
const {countries} = useContext(GlobalContext);
console.log(countries);

const countryFlag = countries.map((country) => {
    return (
        <div>
            <img src={country.flag} alt=""/>
        </div>
    )
}
 
)

    
    return (
        <div>
           {countryFlag}
        </div>
    )
}

export default FlagCountry
