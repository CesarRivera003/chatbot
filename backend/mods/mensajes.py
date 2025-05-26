def process_message(message):
    if not message.strip():
        return "Por favor, envía un mensaje válido."
    return "¡Hola! ¿En qué te puedo ayudar?"

def main():
    while True:
        user_input = input("Tú: ")
        if user_input.lower() == "salir":
            break
        response = process_message(user_input)
        print(f"Chatbot: {response}")

if __name__ == "__main__":
    main()


    