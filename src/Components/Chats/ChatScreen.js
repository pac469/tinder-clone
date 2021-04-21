import React, { useState, useEffect } from 'react';
import './ChatScreen.css'
import Avatar from '@material-ui/core/Avatar';
import { useParams } from "react-router-dom";

function ChatScreen() {
    const [input, setInput] = useState('');
    const { person } = useParams()
    const [currentMessages, setCurrentMessages] = useState([])
    const [messages, setMessages] = useState(
        {
            Clement: [
                {
                    name: "Clement",
                    image: "https://yt3.ggpht.com/a/AATXAJzk3Q0K_jLcqVVXOFqMz6iNw9YAt-b98G842PRrA_w=s900-c-k-c0x00ffffff-no-rj",
                    message: "Hello everybody... How is it going? "
                },
                {
                    message: "Hi! How are you Clement? "
                }
            ],
            Elon: [
                {
                    name: "Elon",
                    image: "https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
                    message: "Hey! How is it going?"
                },
                {
                    message: "Hi Elon!!"
                }
            ],
            Mark: [
                {
                    name: "Mark",
                    image: "data:image/jpeg;base64,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",
                    message: "Hi! How you doin?"
                }, {
                    message: "Hey Mark. Everything is great!!"
                }
            ],
            Steve: [
                {
                    name: "Steve",
                    image: "data:image/jpeg;base64,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",
                    message: "Hey! I need help from a friend"
                },
                {
                    message: "Hey Steve. I am here"
                }
            ]
        })

    const handleSend = e => {
        e.preventDefault();
        setCurrentMessages([...currentMessages, { message: input }]);
        setInput('')
    };

    useEffect(() => {
        setCurrentMessages(messages[person])
    }, [person])

    return (
        <div className="chatscreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH {person.toUpperCase()} ON 10/08/20</p>
            {currentMessages.map(message => (
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar
                            className="chatScreen__image"
                            alt={message.name}
                            src={message.image}
                        />
                        <p className="chatScreen__text"> {message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser"> {message.message}</p>
                    </div>
                )
            ))}
            <form className="chatScreen__input">
                <input className="chatScreen__inputField"
                    type="text" placeholder="Type a message"
                    value={input} onChange={(e) => setInput(e.target.value)} />
                <button onClick={handleSend} type="submit" className="chatScreen__inputButton">
                    SEND
                    </button>
            </form>
        </div>
    );
}

export default ChatScreen;