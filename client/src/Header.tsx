import { RiChatNewLine } from "react-icons/ri";

const Header = ({setChatHistory, chatHistory}) => {
   
    const clearHistory = () => {

        console.log("Clearing chat history..");
        
        setChatHistory([]);
        
        console.log(chatHistory);
    }


    return (
        <div className="Header-new-chat">
            <RiChatNewLine className="new-chat-icon" onClick={() => {clearHistory()}} />
        </div>
    )
}

export default Header
