import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [jokes, setjokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setjokes(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <h1>Hello</h1>
      <p>Number of jokes: {jokes.length}</p>

      {jokes.map((joke) => (
        <div key={joke.id}>
          <h4>{joke.content}</h4>
          <p>{joke.likes}</p>
        </div>
      ))}
    </>
  );
}

export default App;
