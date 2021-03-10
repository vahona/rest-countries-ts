import React, {useContext, useState, useRef} from 'react'
import GlobalContext from '../components/GlobalContext'
import styled from 'styled-components'
import { Link } from "react-router-dom";



 const Image = styled.img`
   width: 100%;
  
`

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 2rem
`
const ListLink = styled(Link)`
 text-decoration: none;
 color: black;
 background-color: white;
 
`

const SubContainer = styled.div`
 padding: 1rem
`

export const  FlagCountry = () => {

    const [name, setName] = useState("");
 
const {countries} = useContext(GlobalContext);
const ref = useRef<HTMLInputElement>(null)
// const filteredCountry = countries.filter((country) => country.name?.toLowerCase().includes(ref?.current?.value.tolowerCase()))

console.log("ref",ref?.current?.value);
console.log(countries);

const countryFlag = countries.map((country) => {
    return (
        <ListLink to={`/CountryInfo/${country.name}`}>
            <Image src={country.flag} alt=""/>
            <SubContainer >
                <h1>{country.name}</h1>
                <div><span>Population</span>: {country.population} </div>
                <div><span>Region</span>: {country.region}</div>
                <div><span>Capital</span>: {country.capital}</div>
            </SubContainer >
        </ListLink>
    )
}
 
)



    
    return (
        <div>
            <div>
            <div>
               <input type="text" name="contry" id="country" ref={ref} value={name} onChange={(e) => setName(e.target.value)} placeholder="search for a country"/>
            </div>
            <div>
                <select name="country" id="country__choice">
                    <option value="">Filter by region</option>
                    <option value="africa"> Africa </option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceanie">Oceanie</option>
                    <option value="polar">Polar</option>
                    {/* {countries.map((countryname) => (
                        <option value={countryname.region} >{countryname.region}</option>
                    )
                    )} */}
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
