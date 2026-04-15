# Contaminación Plástica - Sitio Web Educativo

Sitio web estilo Britannica sobre la contaminación plástica y sus soluciones.

## 🌊 Estructura del Proyecto

```
plastic-pollution-web/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos estilo Britannica
├── js/
│   └── main.js         # Interactividad
└── images/             # Imágenes (opcional)
```

## 🚀 Cómo usar

### Opción 1: Abrir localmente
Simplemente abre `index.html` en tu navegador.

### Opción 2: Servidor local (recomendado)
```bash
cd plastic-pollution-web
python3 -m http.server 8000
# Abre http://localhost:8000
```

## 📋 Características

- ✅ Diseño editorial limpio estilo Britannica
- ✅ Tipografía serif para lectura académica
- ✅ Barra lateral con tabla de contenidos
- ✅ Totalmente responsive (móvil, tablet, desktop)
- ✅ Navegación suave entre secciones
- ✅ Indicador de progreso de lectura
- ✅ Animaciones sutiles al hacer scroll
- ✅ Optimizado para SEO básico

## 🌐 Publicar en Internet

### Netlify (Recomendado - Gratis)
1. Crea cuenta en [netlify.com](https://netlify.com)
2. Arrastra la carpeta `plastic-pollution-web` a Netlify Drop
3. Tu sitio estará online en segundos

### Vercel
1. Crea cuenta en [vercel.com](https://vercel.com)
2. Instala Vercel CLI: `npm i -g vercel`
3. Ejecuta `vercel` en la carpeta del proyecto

### GitHub Pages
1. Crea un repositorio en GitHub
2. Sube los archivos
3. Activa GitHub Pages en Settings

## 📝 Contenido

El sitio incluye:
- **El Problema**: Descripción de la contaminación plástica
- **La Solución**: Economía circular del plástico
- **Cómo Funciona**: Explicación del sistema circular
- **Estadísticas**: Datos globales impactantes
- **Esperanza**: Llamado a la acción y optimismo

## 🎨 Personalización

### Cambiar colores
Edita `css/styles.css` y modifica las variables CSS:
```css
:root {
  --color-primary: #0066cc;  /* Color principal */
  --color-accent: #00a878;   /* Color de acento */
}
```

### Cambiar imagen hero
Reemplaza la imagen en `index.html` o usa el atributo `onerror` que carga una imagen de Unsplash automáticamente.

## 📊 Dominio Personalizado

Para tener un dominio como `www.tudominio.com`:

1. **Comprar dominio**: Namecheap, Google Domains, GoDaddy (~$10-15/año)
2. **Configurar DNS**: Apunta los nameservers a tu hosting (Netlify/Vercel)
3. **Esperar propagación**: 24-48 horas

## 🔧 Tecnologías

- HTML5 semántico
- CSS3 con Custom Properties
- JavaScript vanilla (sin frameworks)
- Sin dependencias externas

## 📄 Licencia

Contenido educativo de libre uso.
