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

const Span3 = styled.span`
  margin-right: 0.5rem
`

const Button = styled.button`
  background: white;
  border: none;
  margin: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 5px;
  font-size: 24px;
  box-shadow: 1px 3px 3px 3px gainsboro;
`

const BigContainer = styled.div`
   margin-inline-start: 2.5rem
`

 function CountryInfo() {

    const {countries} = useContext(GlobalContext);

    interface ParamType {
        name: string 
  }

  const {name} = useParams<ParamType>()
  

  const country = countries.find(country => country.name === name)
  const history = useHistory()

    return (
          <div>
            <div>
            <Button onClick={() => history.goBack()}> <Span3> ← </Span3> Back</Button>
            </div>
            <BigContainer>
            <Image src={country?.flag} alt=""/>
            <h2> {country?.name} </h2>
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
                  <div id={lang.name}>{lang.name}</div>
               ))}</div>
           </article>
           <article>
               <div>
               <Span2>Border country</Span2>:
                   <div >{country?.borders.map((border) => (<button>{border}</button>))}</div>
               </div>
           </article>
           </BigContainer>
        </div >
    )
}

export default CountryInfo
