import { FaSearch } from "react-icons/fa";

const Input = ({ question, setQuestion, answer, setAnswer, chatHistory, setChatHistory }) => {
  
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


  const handleSubmit = (e:any) => {

    e.preventDefault();
    
    //Debugging purposes
    console.log("handling submit..");
    console.log(`value is ${question}`);
    console.log("fetching data..");

    setChatHistory([...chatHistory, question]);


    fetch(`http://localhost:3500/getChat?question=${encodeURIComponent(question)}`)
    .then((res) => res.json())
    .then((data) => {
        console.log("Value", data);
        const fetchedAnswer = parseBoldText(data.generated_text);
        setAnswer(fetchedAnswer);

        setChatHistory((prevChatHistory) => [...prevChatHistory, fetchedAnswer]);
        console.log(chatHistory);

        console.log("Fetched answer from server.");
    })
    .catch((error) => {
        console.error("Error fetching data", error);
    });

console.log("finished fetching data");
  };




  return (
    <div className="search-container">
      <form className="search">
        <input
          type="text"
          placeholder="Message AI"
          name="search"
          onChange={(e)=>{setQuestion(e.target.value)}}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              handleSubmit(e);
            }
          }}
        />
        <FaSearch className="search-icon"></FaSearch>
      </form>
    </div>
  );
};

export default Input;
