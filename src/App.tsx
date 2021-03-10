import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';
import { GlobalProvider } from './components/GlobalContext';
import FlagCountry from './components/FlagCountry'
import styled from 'styled-components'
import CountryInfo from './components/CountryInfo'


const Body = styled.div`
  background-color: ghostwhite
`



function App() {
  return (
    <GlobalProvider>
     <Body>
      <h1> Where in the world? </h1>
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
