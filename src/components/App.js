// create your App component here
import React, { useState, useEffect } from "react";

const uri = "https://dog.ceo/api/breeds/image/random";

const App = () => {
  const [render, setRender] = useState("Loading...");
  useEffect(() => {
    fetch(uri)
      .then((resp) => resp.json())
      .then((data) => setRender(<img src={data.message} alt="A Random Dog" />));
  }, []);
  return <p>{render}</p>;
};

export default App;
