import React, {useContext} from 'react'
import GlobalContext from '../components/GlobalContext'
import { useParams, useHistory } from "react-router-dom";
import styled from 'styled-components'
import { type } from 'node:os';

const Image = styled.img`
width: 50%
`

type Language = {
    iso639_1: string,
    iso639_2: string,
    name: string,
    nativeName: string
}
 type Currencies = {
    code: string,
    name: string,
    symbol: string

 }

 


 function CountryInfo() {

    const {countries} = useContext(GlobalContext);

    interface ParamType {
        name: string 
  }

  const {name} = useParams<ParamType>()
  

  const country = countries.find(country => country.name === name)

    return (
        <div>
            <Image src={country?.flag} alt=""/>
            <article>
                    <div> <span> Native Name </span>: {country?.nativeName} </div>
                    <div> <span>Population</span>: {country?.population} </div>
                    <div><span>Region</span>: {country?.region} </div>
                    <div><span>Sub Region</span>: {country?.subregion} </div>
                    <div><span>Capital</span>: {country?.capital}</div>
           </article>
           <article>
               <div><span>Top Level Domain</span>: {country?.topLevelDomain}</div>
               {/* <div><span>Currencie</span>: {country?.currencies[0]}</div> */}
               {/* <div><span>Languages</span>: {country?.languages[2]?.name}</div> */}
           </article>
           <article>
               <div>
               <span>Border country</span>:
                   <div>{country?.borders.map((border) => (<button>{border}</button>))}</div>
               </div>
           </article>
        </div>
    )
}

export default CountryInfo
