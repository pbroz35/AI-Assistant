import { Spinner } from '@chakra-ui/react'

const CardContainer = ({ chatHistory, loading }) => {
    return (
        <div>
            <ul className="Card-container">
                {chatHistory.map((chat, index) => (
                    <li key={index} className="chat-item">
                        <div 
                            className={`chat-text ${index % 2 === 0 ? 'user-text' : 'AI-text'}`} 
                            dangerouslySetInnerHTML={{ __html: chat }}>
                        </div>
                    </li>
                ))}
                {loading && (
                    // <li className="loading-message">Loading...</li>
                    
                    <li className="loading-message">
                        <Spinner className="spinner" speed="0.65s"   />
                    </li>
                    
                )}
            </ul>
        </div>
    );
};

export default CardContainer;
