import React, {useContext, useState} from 'react'
import GlobalContext from '../components/GlobalContext'
import styled from 'styled-components'
import { Link } from "react-router-dom";



 const Image = styled.img`
width: 50%
`

export const  FlagCountry = () => {
 
const {countries} = useContext(GlobalContext);
console.log(countries);

const countryFlag = countries.map((country) => {
    return (
        <Link to={`/CountryInfo/${country.name}`}>
            <Image src={country.flag} alt=""/>
            <div>
                <h1>{country.name}</h1>
                <div><span>Population</span>: {country.population} </div>
                <div><span>Region</span>: {country.region}</div>
                <div><span>Capital</span>: {country.capital}</div>
            </div>
        </Link>
    )
}
 
)

    
    return (
        <div>
            <div>
            <div>
               <input type="text" name="contry" id="country" placeholder="search for a country"/>
            </div>
            <div>
                <select name="country" id="country__choice">
                    
                </select>
            </div>
        </div>
           {countryFlag}
        </div>
    )
}

export default FlagCountry
