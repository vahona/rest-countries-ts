import React, {useContext, useState} from 'react'
import GlobalContext from '../components/GlobalContext'
import styled from 'styled-components'
import { Link } from "react-router-dom";



 const Image = styled.img`
width: 100%
`

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 2rem
`
const ListLink = styled(Link)`
 text-decoration: none;
 color: black
`

export const  FlagCountry = () => {
 
const {countries} = useContext(GlobalContext);
console.log(countries);

const countryFlag = countries.map((country) => {
    return (
        <ListLink to={`/CountryInfo/${country.name}`}>
            <Image src={country.flag} alt=""/>
            <div>
                <h1>{country.name}</h1>
                <div><span>Population</span>: {country.population} </div>
                <div><span>Region</span>: {country.region}</div>
                <div><span>Capital</span>: {country.capital}</div>
            </div>
        </ListLink>
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
                    <option value="">Filter by region</option>
                    {countries.map((countryname) => (
                        <option value={countryname.region} >{countryname.region}</option>
                    )
                    )}
                </select>
                
            </div>
        </div>
        <Container>
           {countryFlag}
        </Container>
        </div>
    )
}

export default FlagCountry
