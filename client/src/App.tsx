import { useState } from "react";
import Input from "./Input";
import "./App.css";

function App() {
  //const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("loading..");

  const parseBoldText = (text: string): string => {
    // Handle bold text
    let htmlText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
    // Handle bullet points
    const bulletPoints = htmlText.split('\n').map(line => {
      if (line.trim().startsWith('* ')) {
        return `<li>${line.trim().substring(2)}</li>`;
      }
      return line;
    }).join('\n');
  
    // Wrap bullet points with <ul> tags
    htmlText = bulletPoints.replace(/(?:<li>.*<\/li>\n?)+/g, match => {
      return `<ul>${match}</ul>`;
    });
  
    return htmlText;
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

    console.log("finished fetching data");
  };

  fetchAnswers();

  return (
    <>
    
      <div dangerouslySetInnerHTML={{ __html: answer }} />
      <Input></Input>
    </>
  );
}

export default App;
