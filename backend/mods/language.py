from langdetect import detect

def detect_language(message):
    try:
        lang = detect(message)
        return lang
    except:
        return "en"  # Por defecto, inglés si no se detecta el idioma

def get_response_in_language(message, lang):
    if lang == "es":
        return "¡Hola! ¿En qué puedo ayudarte hoy?"
    elif lang == "en":
        return "Hello! How can I assist you today?"
    else:
        return "Sorry, I only support English and Spanish for now."