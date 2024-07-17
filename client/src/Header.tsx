import { RiChatNewLine } from "react-icons/ri";

const Header = () => {
   
    const clearHistory = () => {

        console.log("Clearing chat history..");
        
        




    }


    return (
        <div className="Header-new-chat">
            <RiChatNewLine className="new-chat-icon" onClick={() => {clearHistory()}} />
        </div>
    )
}

export default Header
