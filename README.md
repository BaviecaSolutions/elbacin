# Chat La Mancha 🌾✨

Una interfaz de chat inspirada en los paisajes y el cielo de Castilla-La Mancha, con dos temas únicos que capturan la esencia de la región.

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

## ✨ Características

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

1. **Abrir el archivo**: Abre `index.html` en tu navegador
2. **Explorar temas**: Haz clic en el botón de cambio de tema (sol/luna)
3. **Iniciar conversación**: Usa las tarjetas de sugerencia o escribe tu propio mensaje
4. **Disfrutar**: Experimenta con ambos temas y observa las transiciones

## 🎯 Tecnologías

- **HTML5**: Estructura semántica
- **CSS3**: Variables CSS, gradientes, animaciones, glassmorphism
- **Tailwind CSS**: Framework base para utilidades
- **JavaScript Vanilla**: Lógica de interacción sin dependencias
- **Font Awesome 6**: Iconografía moderna
- **Google Fonts**: Crimson Text (serif elegante) e Inter (sans-serif moderna)

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
minimalist-chat
├── index.html          # Interfaz principal del chat
├── src
│   ├── css
│   │   └── styles.css  # Estilos completos con ambos temas
│   └── js
│       └── app.js      # Lógica de interacción y cambio de tema
├── package.json        # Configuración npm
├── tailwind.config.js  # Colores personalizados de La Mancha
└── README.md           # Documentación del proyecto
```

---

**Creado con ❤️ inspirado en los paisajes de Castilla-La Mancha**