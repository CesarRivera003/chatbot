import React, {useState, useEffect} from "react";
import axios from "axios"
import "./ChatBot.css"

const ChatBot =() =>{
    const [chats, setChats ] = useState([])
    const [query, setQuery ] = useState ("")
    const [messages, setMenssages] = useState([])

    useEffect(() => {
        axios
        .get("http://localhost:5000/api/chats")
        .then((res) => setChats(res.data))
        .catch((err) => console.error(err));
    }, [])

    const handleChat = () =>{
        if(!query.trim()) return

        setMenssage((prev) => [...prev, {role: "user", text: query}])

        const found = chats.find(
            (chat) => chat.question.toLoweCase() === query.toLoweCase()
        )

        setMenssages((prev) =>[
            ...prev
            {
                role: "boot",
                text: found ? found.answer : "No encontre una respuesta adecuada"
            }
        ])
        setQuery("")

    }
    const handleKeyPress = (e) => {
        if (e.key === "Enter"){
            handleChat()
        }
    }

    return(
        <div className="chat-container">
        <div className="chat-messages">
            {messages.map((msg ,idx) =>(
                <div
                key= {idx}
                className={`message.bubble ${
                msg.role === "user" ? "user-bubble" : "bot-bubble"
                }`}
                >
                    {msg.text}
                </div>
            ))}
        </div>
        </div>
    )
}
