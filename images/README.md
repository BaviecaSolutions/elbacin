# Carpeta de Imágenes de Fondo

Esta carpeta contiene las imágenes de fondo para el chat.

## 📁 Archivos necesarios

### **fondo-claro.jpg** (Obligatorio)
- **Descripción**: Imagen de fondo para el tema claro
- **Ubicación**: `minimalist-chat/images/fondo-claro.jpg`
- **Recomendaciones**:
  - Resolución mínima: 1920x1080 px
  - Formato: JPG, PNG o WebP
  - Peso recomendado: menos de 500KB (optimizada)
  - Temática sugerida: paisajes de Tomelloso, viñedos, arquitectura manchega, campos de trigo

### **fondo-oscuro.jpg** (Opcional)
- Si quieres una imagen personalizada para el tema oscuro, nómbrala `fondo-oscuro.jpg`
- Por defecto, el tema oscuro usa un gradiente con estrellas animadas

## 🎨 Consejos para elegir la imagen

### Para el tema CLARO:
- ✅ Imágenes claras y luminosas
- ✅ Colores suaves (blancos, beiges, azules claros)
- ✅ Buena para leer texto sobre ella
- ✅ Ejemplos: cielo azul, campos dorados, arquitectura blanca

### Fuentes de imágenes gratuitas:
- [Unsplash](https://unsplash.com/s/photos/spain-landscape)
- [Pexels](https://www.pexels.com/search/vineyard/)
- [Pixabay](https://pixabay.com/images/search/castilla/)

## 🔧 Ajustar la transparencia

Si la imagen es muy intensa o dificulta la lectura, edita el archivo:
`src/css/styles.css` en la línea 40

Cambia los valores de `rgba`:
- Más transparente (imagen menos visible): `rgba(255, 255, 255, 0.9)`
- Menos transparente (imagen más visible): `rgba(255, 255, 255, 0.7)`

## ⚠️ Importante

1. El nombre del archivo debe ser exactamente: **fondo-claro.jpg**
2. Colócalo en esta carpeta: `minimalist-chat/images/`
3. Si usas otro formato (PNG, WebP), actualiza la extensión en `styles.css` línea 42

## 📝 Estructura esperada

```
minimalist-chat/
├── images/
│   ├── fondo-claro.jpg  ← Coloca tu imagen aquí
│   └── README.md        ← Este archivo
├── src/
│   └── css/
│       └── styles.css   ← Configuración del fondo
└── index.html
```
