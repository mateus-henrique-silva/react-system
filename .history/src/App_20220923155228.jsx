import Header from './Components/Header/Header'
import Box from './Components/Box/Box'
import './global.css'

function App() {
  import { useState, useEffect } from "react";
  return (
    <div className="App">
      <Header/>
      <Box name="Mateus" text="hello"/>
    </div>
  );
}

export default App;
