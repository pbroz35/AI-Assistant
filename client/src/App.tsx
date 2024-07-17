import { useState } from "react";
import Input from "./Input";
import "./App.css";
import CardContainer from "./CardContainer";

function App() {
  //const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("loading..");
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState<string[]>([]);


  return (
    <>
      
      {/* <div dangerouslySetInnerHTML={{ __html: answer }} /> */}

      <CardContainer chatHistory = {chatHistory}></CardContainer>
      <Input chatHistory = {chatHistory} setChatHistory={setChatHistory} question={question} setQuestion={setQuestion} answer={answer} setAnswer = {setAnswer}></Input>
    </>
  );
}

export default App;
