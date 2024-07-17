
const CardContainer = ({ chatHistory }) => {
    return (
        <div>
        <ul className="card-Container">
            {
                chatHistory.map((chat, index) => (
                    <li key={index} className="chat-item">
                        <div 
                            className={`chat-text ${index % 2 === 0 ? 'user-text' : 'AI-text'}`} 
                            dangerouslySetInnerHTML={{ __html: chat }}>
                        </div>
                    </li>
                ))
            }
        </ul>
    </div>
    );
};

export default CardContainer;
