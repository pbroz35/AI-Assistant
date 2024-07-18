import { useState } from "react";
import Input from "./Input";
import "./App.css";
import CardContainer from "./CardContainer";
import Header from "./Header";


function App() {
  //const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("loading..");
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState<string[]>([]);

  const [loading, setLoading] = useState<boolean>(false);


  return (
    <>
    <div className="body-container">
      <Header chatHistory={chatHistory} setChatHistory={setChatHistory}></Header>
      <CardContainer chatHistory = {chatHistory} loading={loading}></CardContainer>
      <Input loading={loading} setLoading= {setLoading} chatHistory = {chatHistory} setChatHistory={setChatHistory} question={question} setQuestion={setQuestion} answer={answer} setAnswer = {setAnswer}></Input>
    
    </div>
    
    </>
  );
}

export default App;
