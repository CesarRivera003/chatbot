import json
import os

HISTORY_FILE = "conversation_history.json"

def save_to_history(user_id, user_message, bot_response):
    history = []
    if os.path.exists(HISTORY_FILE):
        with open(HISTORY_FILE, "r") as file:
            history = json.load(file)
    
    history.append({
        "user_id": user_id,
        "user_message": user_message,
        "bot_response": bot_response,
        "timestamp": str(os.times())
    })
    
    with open(HISTORY_FILE, "w") as file:
        json.dump(history, file, indent=2)

def get_history(user_id):
    if not os.path.exists(HISTORY_FILE):
        return []
    with open(HISTORY_FILE, "r") as file:
        history = json.load(file)
    return [entry for entry in history if entry["user_id"] == user_id]