import React, {useContext} from 'react'
import GlobalContext from '../components/GlobalContext'
import { useParams, useHistory } from "react-router-dom";
import styled from 'styled-components'
import { type } from 'node:os';

const Image = styled.img`
width: 50%
`
const Span2 = styled.span`
  font-weight: 700
`



 


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
                    <div> <Span2> Native Name </Span2>: {country?.nativeName} </div>
                    <div> <Span2>Population</Span2>: {country?.population} </div>
                    <div><Span2>Region</Span2>: {country?.region} </div>
                    <div><Span2>Sub Region</Span2>: {country?.subregion} </div>
                    <div><Span2>Capital</Span2>: {country?.capital}</div>
           </article>
           <article>
               <div><Span2>Top Level Domain</Span2>: {country?.topLevelDomain}</div>
               <div><Span2>Currencie</Span2>: {country?.currencies.map((cur) => (
                       <div>{cur.name}</div> 
               ))}</div>
               <div><Span2>Languages</Span2>: {country?.languages.map((lang) => (
                  <div>{lang.name}</div>
               ))}</div>
           </article>
           <article>
               <div>
               <Span2>Border country</Span2>:
                   <div>{country?.borders.map((border) => (<button>{border}</button>))}</div>
               </div>
           </article>
        </div>
    )
}

export default CountryInfo
