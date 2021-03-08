import React from 'react';
import Head from "./components/Head"
import './App.css';
import { GlobalProvider } from './components/GlobalContext';




function App() {
  return (
    <GlobalProvider>
      <h1> Where in the world </h1>
      <Head/>
    </GlobalProvider>
  );
}

export default App;
