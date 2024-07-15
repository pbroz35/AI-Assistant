import { useState } from "react";

import "./App.css";

function App() {
  //const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("empty");

  const fetchAnswers = () => {
    console.log("fetching data..");

    fetch("http://localhost:3500/getChat")
      .then((res) => res.json())
      .then((data) => {
        console.log("Value", data);
        setAnswer(data.generated_text);
        console.log("Fetched answer from server.");
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });

      console.log("finished fetching data")
  };


  fetchAnswers();

  return (
    <>
      <div>{answer}</div>
    </>
  );
}

export default App;
