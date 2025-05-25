const Chat = require("../models/chat")

exports.addChat = async(req, res) =>{
    try{
        const {question, answer } = req.body
        const newChat = new Chat ({question, answer})
        await newchat.save()
        res.status(201).json(newChat)
    } catch( error){
        res.status(500).json({messaje: "Error al guardar la pregunta", error})
    }
}

exports.getChats = async (req, res) =>{
    try{
        const chats = await Chat.find()
        res.status(200).json(chats)
    }catch( error){
        res.status(500).json({messaje: "Error al obtener la pregunta"})
    }
}