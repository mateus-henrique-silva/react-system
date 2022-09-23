import Header from './Components/Header/Header'
import { useState, useEffect } from "react";
import Box from './Components/Box/Box'
import './global.css'

function App() {
  const [message, setMessage] = useEffect
  return (
    <div className="App">
      <Header/>
      <Box name="Mateus" text="hello"/>
    </div>
  );
}

export default App;
