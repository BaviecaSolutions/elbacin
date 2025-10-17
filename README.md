# Chat La Mancha 🌾✨

Una interfaz de chat inspirada en los paisajes y el cielo de Castilla-La Mancha, con integración completa a n8n para procesamiento de mensajes con IA u otros servicios.

## 🚀 Inicio Rápido

**¿Primera vez?** Lee la [Guía de Instalación Completa](INSTALL.md)

```bash
# 1. Instala dependencias
npm install

# 2. Configura tu webhook de n8n en .env
N8N_WEBHOOK_URL=https://tu-instancia-n8n.com/webhook/tu-id

# 3. Inicia el servidor
npm start

# 4. Abre http://localhost:3000
```

## 🎨 Temas Visuales

### ☀️ Tema Claro - "Campos de La Mancha"
Inspirado en la tierra y el sol manchego:
- **Paleta de colores**: Ocres, terracotas, beiges, dorado trigo, arena
- **Sensación**: Cálida, acogedora, luminosa y orgánica
- **Elementos**: Gradientes que evocan atardeceres en los campos, texturas terrestres suaves
- **Colores principales**:
  - Tierra: `#D4A574`
  - Arena: `#E8D4B8`
  - Terracota: `#C87E5A`
  - Dorado trigo: `#D9B382`
  - Luz solar: `#F4E4C1`

### 🌙 Tema Oscuro - "Cielo Nocturno"
Inspirado en el cielo estrellado manchego:
- **Paleta de colores**: Azules profundos, violetas oscuros, grises suaves
- **Sensación**: Tranquila, misteriosa, inmersiva y relajante
- **Elementos**: Estrellas animadas titilando, gradientes que evocan la noche
- **Colores principales**:
  - Azul noche: `#1A1F35`
  - Violeta: `#2D2747`
  - Horizonte: `#323952`
  - Estrella: `#E8E8F0`
  - Destello: `#FFE8B3`

## ✨ Características Principales

### 🔌 Integración n8n
- **Conexión directa** a workflows de n8n vía webhooks
- **Sistema de respaldo** automático si n8n no está disponible
- **Gestión de sesiones** para mantener contexto entre mensajes
- **Manejo de errores robusto** con timeouts y reintentos
- **API REST** para comunicación backend-frontend

### Diseño Visual
- **Dos temas completos** con transiciones suaves entre ellos
- **Estrellas animadas** en el tema oscuro (100 estrellas con efecto twinkle)
- **Gradientes personalizados** que evocan paisajes manchegos
- **Efectos glassmorphism** con backdrop-filter para elementos modernos
- **Animaciones sutiles**: fade-in, slide-in, float, typing indicator

### Interfaz de Usuario
- ✅ **Sidebar** con historial de conversaciones
- ✅ **Pantalla de bienvenida** con iconos animados y tarjetas de sugerencia
- ✅ **Mensajes con avatares** circulares personalizados
- ✅ **Input de texto auto-expandible** con límite de altura
- ✅ **Botones de acción** con gradientes temáticos
- ✅ **Indicador de escritura** animado (tres puntos)
- ✅ **Toggle de tema** visible en sidebar y header
- ✅ **Diseño responsive** para móviles y tablets

### Funcionalidades
- 🔄 **Cambio de tema persistente** (guardado en localStorage)
- 💬 **Respuestas contextuales** basadas en palabras clave
- 📱 **Sidebar desplegable** en dispositivos móviles
- ⌨️ **Atajos de teclado**: Enter para enviar, Shift+Enter para nueva línea
- 🔄 **Nueva conversación** limpia el chat y vuelve a la pantalla de bienvenida
- 📜 **Scroll suave** automático al recibir mensajes

### Respuestas Temáticas
El asistente reconoce y responde a temas relacionados con La Mancha:
- **Campos y tierra**: Descripciones poéticas de los paisajes
- **Cielo nocturno**: Respuestas sobre estrellas y noches despejadas
- **Cultura manchega**: Tradiciones, historia, Quijote
- **Saludos personalizados** con toque manchego

## 🚀 Cómo usar

### Configuración Inicial

Lee la [Guía de Instalación Completa](INSTALL.md) para configurar n8n.

### Uso del Chat

1. **Inicia el servidor**: `npm start`
2. **Abre el navegador**: Ve a `http://localhost:3000`
3. **Explora temas**: Haz clic en el botón de cambio de tema (sol/luna)
4. **Chatea**: Escribe mensajes y recibe respuestas de tu workflow n8n

## 🎯 Tecnologías

### Backend
- **Node.js + Express**: Servidor web
- **Axios**: Cliente HTTP para n8n
- **dotenv**: Gestión de variables de entorno
- **CORS**: Manejo de peticiones cross-origin

### Frontend
- **HTML5**: Estructura semántica
- **CSS3**: Variables CSS, gradientes, animaciones, glassmorphism
- **Tailwind CSS**: Framework base para utilidades
- **JavaScript Vanilla**: Lógica de interacción sin dependencias
- **Font Awesome 6**: Iconografía moderna
- **Google Fonts**: Crimson Text e Inter

### Integración
- **n8n**: Plataforma de automatización y workflows

## 🌟 Detalles Especiales

### Estrellas Animadas
- Se generan dinámicamente 100 estrellas al cambiar al tema oscuro
- 20% son "estrellas brillantes" con mayor luminosidad
- Cada estrella tiene posición y timing de animación aleatorios
- Efecto twinkle suave y natural

### Paleta de Colores Contextual
Todos los colores fueron cuidadosamente seleccionados para evocar:
- **Tema claro**: Campos de trigo, tierra arada, atardeceres cálidos, olivos
- **Tema oscuro**: Cielo despejado, estrellas, horizonte nocturno, luz de luna

### Tipografía Elegante
- **Crimson Text**: Para títulos y elementos destacados (evoca clasicismo)
- **Inter**: Para texto de mensajes y UI (moderna y legible)

## 📱 Responsive

El diseño se adapta perfectamente a:
- 💻 **Desktop**: Sidebar fijo, layout completo
- 📱 **Tablet/Mobile**: Sidebar desplegable, grid de sugerencias en columna única

## 🎨 Personalización

Puedes modificar fácilmente los colores en `styles.css`:

```css
:root {
    /* Tema Claro */
    --tierra-bg: #F4E4C1;
    --terracota: #C87E5A;

    /* Tema Oscuro */
    --noche-bg: #1A1F35;
    --estrella: #E8E8F0;
}
```

## 💡 Inspiración

Este proyecto captura la esencia de Castilla-La Mancha:
- Sus **campos infinitos** bajo el sol
- Su **cielo nocturno despejado** lleno de estrellas
- Su **carácter** cálido y acogedor
- Su **historia** rica y profunda

## 📁 Estructura del Proyecto

```
elbacin/
├── server.js              # Servidor backend Express
├── package.json           # Dependencias y scripts
├── .env                   # Configuración (webhook n8n)
├── .env.example           # Plantilla de configuración
├── .gitignore            # Archivos ignorados por git
├── README.md             # Esta documentación
├── INSTALL.md            # Guía de instalación paso a paso
├── index.html            # Interfaz principal del chat
├── mapa.html             # Mapa interactivo de Tomelloso
├── tailwind.config.js    # Configuración de Tailwind
├── images/               # Imágenes de fondo
│   ├── fondo_uvas.jpg
│   └── fondo_lavanda.jpg
└── src/
    ├── css/
    │   └── styles.css    # Estilos con temas claro/oscuro
    └── js/
        └── app.js        # Lógica del chat + integración n8n
```

## 📚 Documentación

- **[INSTALL.md](INSTALL.md)** - Guía completa de instalación paso a paso
- **[README.md](README.md)** - Este archivo (visión general)
- **`.env.example`** - Plantilla de configuración

## 🔌 API Endpoints

### `POST /api/chat`
Envía mensaje a n8n y obtiene respuesta.

### `GET /api/health`
Verifica estado del servidor.

### `POST /api/webhook/response`
Recibe respuestas asíncronas de n8n (opcional).

## 🤝 Contribuir

¡Las contribuciones son bienvenidas!

1. Fork el proyecto
2. Crea tu rama (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

MIT License

## 👤 Autor

**BaviecaSolutions**
- GitHub: [@BaviecaSolutions](https://github.com/BaviecaSolutions)
- Repositorio: [elbacin](https://github.com/BaviecaSolutions/elbacin)

---

**Creado con ❤️ inspirado en los paisajes de Castilla-La Mancha**
**Powered by n8n automation**