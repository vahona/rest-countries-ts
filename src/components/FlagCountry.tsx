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

const ContainerInput = styled.div`
  display: flex;
  justify-content: space-between;
  margin-inline-start: 5%;
  margin-inline-end: 5%;
  margin-bottom: 10%;
  margin-top: 10%;
`

const Span = styled.span`
 font-weight: 700
`

const Input = styled.input`
 border: none
`

const Select = styled.select`
  border: none;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  box-shadow: 1px 3px 3px 3px gainsboro;
  border-radius: 10px


`

export const  FlagCountry = () => {

    const [name, setName] = useState("");
 
const {countries} = useContext(GlobalContext);
const ref = useRef<HTMLInputElement>(null)
// const filteredCountry = countries.filter((country) => country.name?.toLowerCase().includes(ref?.current?.value.tolowerCase()))

console.log("ref",ref?.current?.value);
// console.log(countries);

const countryFlag = countries.map((country) => {
    return (
        <ListLink to={`/CountryInfo/${country.name}`}>
            <Image src={country.flag} alt=""/>
            <SubContainer >
                <h2>{country.name}</h2>
                <div><Span>Population</Span>: {country.population} </div>
                <div><Span>Region</Span>: {country.region}</div>
                <div><Span>Capital</Span>: {country.capital}</div>
            </SubContainer >
        </ListLink>
    )
}
 
)

    
    return (
        <div>
            <ContainerInput>
            <div>
               <input type="text" name="contry" id="country" ref={ref} value={name} onChange={(e) => setName(e.target.value)} placeholder="search for a country"/>
            </div>
            <div>
                <Select name="country" id="country__choice">
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
                </Select>
                
            </div>
        </ContainerInput>
        <Container>
           {countryFlag}
        </Container>
        </div>
    )
}

export default FlagCountry
