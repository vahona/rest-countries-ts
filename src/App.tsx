import React from 'react';
import Head from "./components/Head"
import './App.css';
import { GlobalProvider } from './components/GlobalContext';
import FlagCountry from './components/FlagCountry'




function App() {
  return (
    <GlobalProvider>
      <h1> Where in the world </h1>
      <Head/>
      <FlagCountry/>
    </GlobalProvider>
  );
}

export default App;
