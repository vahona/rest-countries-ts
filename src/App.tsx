import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';
import { GlobalProvider } from './components/GlobalContext';
import FlagCountry from './components/FlagCountry'
import styled from 'styled-components'
import CountryInfo from './components/CountryInfo'


const Body = styled.div`
  background-color: ghostwhite;
  padding-top: 2rem

`
const Header = styled.div`
  background-color: white;
  margin-top: -3rem;
  paddind-top: 1rem;
  box-shadow: 1px 5px 1px lightgrey;
  
`

const Title = styled.h1`
 margin: 1rem;
 padding-bottom: 1rem;
 font-weight: 700;
 font-size: 24px;
 width: 100%
 

`


function App() {
  return (
    <GlobalProvider>
     <Body>
       <Header>
      <Title> Where in the world? </Title>
      </Header>
        <Router>
        <Switch>
          <Route exact path="/">
            <FlagCountry/>
        </Route>
        <Route exact path="/CountryInfo/:name">
            <CountryInfo/>
        </Route>
      </Switch>
      </Router>
      </Body>
    </GlobalProvider>
  );
}

export default App;
