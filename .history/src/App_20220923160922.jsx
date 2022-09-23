import Header from "./Components/Header/Header";
import { useState, useEffect } from "react";
import Box from "./Components/Box/Box";
import "./global.css";

function App() {
  const [message, setMessage] = useS([]);
  useEffect(() => {
    fetch("http://127.0.0.1:4040/estudando")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data);
      });
  }, []);
  return (
    <div className="App">
      <Header />
      {message.map((e) => {
        return <Box name={e.name} text={e.Message} />;
      })}
    </div>
  );
}

export default App;
