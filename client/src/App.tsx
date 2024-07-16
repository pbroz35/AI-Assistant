import { useState } from "react";
import Input from "./Input";
import "./App.css";

function App() {
  //const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("loading..");
  const [question, setQuestion] = useState("");


  return (
    <>
      
      <div dangerouslySetInnerHTML={{ __html: answer }} />
      <Input question={question} setQuestion={setQuestion} answer={answer} setAnswer = {setAnswer}></Input>
    </>
  );
}

export default App;
