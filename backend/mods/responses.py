KEYWORD_RESPONSES = {
    "ayuda": "¡Claro! Estoy aquí para ayudarte. ¿Qué necesitas?",
    "hola": "¡Hola! ¿En qué puedo ayudarte hoy?",
    "precio": "Los precios dependen del servicio. ¿Quieres más detalles?",
}

def get_keyword_response(message):
    message = message.lower()
    for keyword, response in KEYWORD_RESPONSES.items():
        if keyword in message:
            return response
    return None