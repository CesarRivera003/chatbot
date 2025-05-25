# Historias de usuario para el proyecto del Chatbot

## Historia 1: Procesar mensajes de texto básicos
**Descripción**:  
Como usuario del chatbot, quiero enviar mensajes de texto simples, para que el chatbot pueda responder con una respuesta predefinida o procesada.

**Criterios de aceptación**:  
- El chatbot debe recibir mensajes de texto enviados por el usuario.  
- El chatbot debe responder con un mensaje predefinido (por ejemplo, "¡Hola! ¿En qué te puedo ayudar?") si no entiende el mensaje.  
- La respuesta debe ser inmediata (menos de 2 segundos).

**Prioridad**: Alta  
**Esfuerzo estimado**: 3 horas

---

## Historia 2: Soporte para múltiples idiomas
**Descripción**:  
Como usuario multilingüe, quiero interactuar con el chatbot en mi idioma preferido (por ejemplo, español, inglés), para que la comunicación sea más accesible y cómoda.

**Criterios de aceptación**:  
- El chatbot debe detectar el idioma del mensaje entrante.  
- El chatbot debe responder en el mismo idioma que el mensaje recibido.  
- Soporte inicial para al menos dos idiomas (español e inglés).

**Prioridad**: Media  
**Esfuerzo estimado**: 5 horas

## Historia de usuario 3: Guardar historial de conversaciones
**Título**: Almacenamiento del historial de conversaciones 
**Descripción**:
Como usuario, quiero que el chatbot guarde el historial de mis conversaciones, para poder retomar la interacción donde la dejé. 
Criterios de aceptación: 
- El chatbot debe almacenar los mensajes del usuario y sus respuestas en una base de datos o archivo (por ejemplo, JSON o SQLite). 
- El usuario puede solicitar ver el historial de la conversación. 
- El historial debe estar asociado a un identificador único del usuario (por ejemplo, ID de sesión).
**Prioridad**: Media 
**Esfuerzo estimado**: 6 horas

---

## Historia de usuario 4: Respuestas basadas en palabras clave
**Título**: Respuestas basadas en palabras clave 
**Descripción**:
Como usuario, quiero que el chatbot reconozca palabras clave en mis mensajes, para que proporcione respuestas relevantes según el contexto. 
Criterios de aceptación: 
- El chatbot debe identificar palabras clave predefinidas (por ejemplo, "ayuda", "hola", "precio"). 
- Debe responder con mensajes específicos asociados a esas palabras clave. 
- Si no se detectan palabras clave, el chatbot debe responder con un mensaje genérico.
**Prioridad**: Alta 
**Esfuerzo estimado**: 4 horas

---

## Historia de usuario 5: Interfaz de usuario básica
**Título**: Interfaz de usuario para el chatbot 
**Descripción**:
Como usuario, quiero interactuar con el chatbot a través de una interfaz web o de consola simple, para que sea fácil de usar. 
Criterios de aceptación: 
- El chatbot debe tener una interfaz (por ejemplo, una página web con HTML/CSS o una consola en Python). 
- La interfaz debe mostrar los mensajes enviados y las respuestas del chatbot. 
- La interfaz debe ser responsive (si es web) o clara y funcional (si es consola).
**Prioridad**: Alta 
**Esfuerzo estimado**: 8 horas
