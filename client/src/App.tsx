import { useState } from "react";

import "./App.css";

function App() {
  //const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("empty");

  const parseBoldText = (text: string): string => {
    return text.replace(/\*\*(.*?)\*\*/g, '<br></br> <strong>$1</strong> <br></br>');
  };

  
  const fetchAnswers = () => {
    console.log("fetching data..");

    fetch("http://localhost:3500/getChat")
      .then((res) => res.json())
      .then((data) => {
        console.log("Value", data);
        setAnswer(parseBoldText(data.generated_text));
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
      <div dangerouslySetInnerHTML={{ __html: answer }} />
    </>
  );
}

export default App;
