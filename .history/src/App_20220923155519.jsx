import Header from "./Components/Header/Header";
import { useState, useEffect } from "react";
import Box from "./Components/Box/Box";
import "./global.css";

function App() {
  const [message, setMessage] = useEffect([]);
  useEffect(() => {
    fetch("http://127.0.0.1:4040/estudando")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data);
      });
  }, []);
  return (
    message.map(
    <div className="App">
      <Header />
      <Box name="Mateus" text="hello" />
    </div>
  );
}

export default App;
