# 🚀 Guía de Instalación y Configuración

## Chat La Mancha con Integración n8n

Esta guía te llevará paso a paso para configurar el chat con tu workflow de n8n.

---

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener:

- ✅ Node.js instalado (versión 14 o superior)
- ✅ npm o yarn
- ✅ Una cuenta de n8n (cloud o self-hosted)
- ✅ Git instalado

---

## 🔧 Paso 1: Instalación del Proyecto

### 1.1 Clona el repositorio

```bash
git clone https://github.com/BaviecaSolutions/elbacin.git
cd elbacin
```

### 1.2 Instala las dependencias

```bash
npm install
```

Esto instalará:
- `express` - Servidor web
- `cors` - Manejo de CORS
- `axios` - Cliente HTTP para llamar a n8n
- `dotenv` - Gestión de variables de entorno
- `nodemon` - Auto-reload en desarrollo (opcional)

---

## ⚙️ Paso 2: Configuración de n8n

### 2.1 Crea un Workflow en n8n

1. Ve a tu instancia de n8n
2. Crea un nuevo workflow
3. Añade los siguientes nodos:

#### **Nodo 1: Webhook (Trigger)**
- Método HTTP: `POST`
- Path: Elige un path único (ej: `/chat-mancha`)
- Respuesta: `Using 'Respond to Webhook' Node`

#### **Nodo 2: Procesamiento (ejemplo con OpenAI)**
Si quieres usar IA, añade un nodo OpenAI:
- Model: `gpt-3.5-turbo` o `gpt-4`
- Prompt:
  ```
  Eres un asistente amigable que representa los paisajes de La Mancha.
  Responde de manera poética y cálida.

  Usuario dice: {{ $json.message }}
  ```

**O usa cualquier otro servicio:**
- HTTP Request para APIs externas
- Function para lógica personalizada
- Base de datos para almacenar contexto
- etc.

#### **Nodo 3: Respond to Webhook**
Configura la respuesta:
- Response Code: `200`
- Response Body:
  ```json
  {
    "response": "{{ $json.output }}"
  }
  ```

### 2.2 Activa tu Workflow

1. Guarda el workflow
2. Actívalo (toggle en la esquina superior derecha)
3. Copia la URL del webhook (se muestra en el nodo Webhook)

La URL tendrá este formato:
```
https://tu-instancia.app.n8n.cloud/webhook/tu-id-unico
```
o si es self-hosted:
```
https://tu-dominio.com/webhook/tu-id-unico
```

---

## 🔐 Paso 3: Configuración del Archivo .env

### 3.1 Crea el archivo .env

En la carpeta raíz del proyecto, ya existe un archivo `.env`. Ábrelo con tu editor de texto.

### 3.2 Configura tu Webhook

Reemplaza la URL de ejemplo con tu URL real de n8n:

```env
# n8n Webhook Configuration
N8N_WEBHOOK_URL=https://tu-instancia.app.n8n.cloud/webhook/tu-id-unico

# Server Configuration
PORT=3000
```

**Importante:**
- Asegúrate de que no haya espacios extra
- La URL debe comenzar con `https://` o `http://`
- No incluyas parámetros de query en la URL base

### 3.3 (Opcional) Cambia el puerto

Si el puerto 3000 está ocupado, puedes cambiarlo:

```env
PORT=8080
```

---

## ▶️ Paso 4: Inicia el Servidor

### Modo Producción

```bash
npm start
```

Verás algo como:
```
🚀 Server running on http://localhost:3000
📡 Chat API available at http://localhost:3000/api/chat
🔗 n8n webhook URL: https://tu-instancia.app.n8n.cloud/webhook/tu-id
```

### Modo Desarrollo (con auto-reload)

```bash
npm run dev
```

---

## 🌐 Paso 5: Prueba tu Chat

### 5.1 Abre el Chat

En tu navegador, ve a:
```
http://localhost:3000
```

### 5.2 Envía un Mensaje

Escribe cualquier mensaje, por ejemplo:
```
Hola, ¿cómo estás?
```

### 5.3 Verifica la Respuesta

- ✅ Si todo está bien: Verás la respuesta de n8n
- ❌ Si hay error: Verás un mensaje de error o respuesta de respaldo

---

## 🔍 Paso 6: Verificación y Troubleshooting

### Verifica que el Backend Funciona

Abre en tu navegador:
```
http://localhost:3000/api/health
```

Deberías ver:
```json
{
  "status": "ok",
  "message": "Backend is running"
}
```

### Verifica los Logs del Servidor

En la terminal donde ejecutaste `npm start`, verás:
```
[2024-01-15T10:30:00.000Z] Sending message to n8n: Hola
[2024-01-15T10:30:01.500Z] Response from n8n received
```

### Verifica tu Workflow de n8n

1. Ve a n8n
2. Abre tu workflow
3. Haz clic en "Executions" (historial de ejecuciones)
4. Deberías ver las peticiones que llegan desde el chat

---

## ❌ Solución de Problemas Comunes

### Error: "N8N_WEBHOOK_URL not configured"

**Causa:** El archivo `.env` no existe o la variable no está configurada.

**Solución:**
1. Verifica que el archivo `.env` existe en la raíz del proyecto
2. Asegúrate de que tiene la variable `N8N_WEBHOOK_URL`
3. Reinicia el servidor después de modificar `.env`

---

### Error: "Request timeout"

**Causa:** n8n está tardando más de 30 segundos en responder.

**Solución:**
1. Optimiza tu workflow de n8n
2. Verifica que n8n está funcionando correctamente
3. Si usas APIs externas (como OpenAI), verifica que responden rápido

---

### Error: "ECONNREFUSED" o "ENOTFOUND"

**Causa:** No se puede conectar a n8n.

**Solución:**
1. Verifica que la URL en `.env` es correcta
2. Asegúrate de que n8n está accesible desde tu servidor
3. Verifica que el workflow está activado
4. Prueba la URL con curl:
   ```bash
   curl -X POST https://tu-instancia.app.n8n.cloud/webhook/tu-id \
     -H "Content-Type: application/json" \
     -d '{"message":"test","sessionId":"test123"}'
   ```

---

### El chat usa respuestas de respaldo

**Causa:** El backend no puede conectarse a n8n, así que usa respuestas locales.

**Solución:**
1. Revisa los logs del servidor para ver el error exacto
2. Verifica la configuración de n8n
3. Asegúrate de que tu workflow responde con el formato correcto

---

## 📤 Formato de Datos

### Lo que tu Workflow de n8n Recibe

```json
{
  "message": "El mensaje del usuario",
  "sessionId": "session_1234567890_abc123",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

### Lo que tu Workflow debe Responder

**Opción 1 (Recomendado):**
```json
{
  "response": "Tu respuesta aquí"
}
```

**Opción 2:**
```json
{
  "message": "Tu respuesta aquí"
}
```

**Opción 3 (cualquier JSON):**
El backend intentará extraer una respuesta del JSON que envíes.

---

## 🎨 Personalización

### Cambiar el Puerto

Edita `.env`:
```env
PORT=8080
```

### Cambiar el Timeout

Edita `server.js`, línea 31:
```javascript
timeout: 30000, // 30 segundos (30000 milisegundos)
```

### Personalizar Respuestas de Respaldo

Edita `src/js/app.js`, función `simulateAssistantResponse()` (línea ~249).

---

## 🚀 Despliegue en Producción

### Variables de Entorno

En tu plataforma de hosting (Vercel, Railway, Heroku, etc.), configura:

```
N8N_WEBHOOK_URL=tu-webhook-de-produccion
PORT=3000
```

### Recomendaciones

1. **Usa HTTPS** para el webhook de n8n
2. **No expongas** tu archivo `.env`
3. **Añade autenticación** si el chat es privado
4. **Monitorea** los logs y errores
5. **Configura límites** de rate limiting si es necesario

---

## ✅ Lista de Verificación Final

- [ ] Node.js instalado
- [ ] Dependencias instaladas (`npm install`)
- [ ] Workflow de n8n creado y activado
- [ ] Archivo `.env` configurado con URL correcta
- [ ] Servidor iniciado (`npm start`)
- [ ] Chat abierto en navegador
- [ ] Mensaje de prueba enviado correctamente
- [ ] Respuesta de n8n recibida

---

## 📞 ¿Necesitas Ayuda?

- **Issues en GitHub**: [BaviecaSolutions/elbacin/issues](https://github.com/BaviecaSolutions/elbacin/issues)
- **Documentación de n8n**: [docs.n8n.io](https://docs.n8n.io)
- **Comunidad n8n**: [community.n8n.io](https://community.n8n.io)

---

**¡Disfruta de tu chat conectado a n8n!** 🎉
