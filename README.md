# Muylucho Portfolio

Tu portfolio custom

## 🚀 Quick Start

### 1. Setup local

```bash
npm install
npm run dev
```

El sitio se abrirá en `http://localhost:3000`

### 2. Deploy en Vercel

#### Opción A: Automático (recomendado)
1. Sube este código a GitHub
2. Ve a vercel.com
3. Click "New Project" → Selecciona tu repo
4. Vercel configura todo automáticamente
5. Click "Deploy"
6. ¡Listo! Tu sitio estará en `muylucho.vercel.app`

#### Opción B: CLI
```bash
npm i -g vercel
vercel
```

---

## 🎨 Cómo editar SIN tocar código

**TODO está en `src/App.jsx`** — en la sección `CONFIGURATION` al inicio del archivo.

### Cambiar tu info básica

```javascript
const config = {
  name: "Tu Nombre",
  subtitle: "Muylucho",
  role: "Tu Rol",
  bio: {
    intro: "Texto intro",
    experience: "Tu experiencia...",
    note: "Nota final",
    personal: "Sobre tu práctica personal"
  },
  // ...
}
```

### Editar PROYECTOS DESTACADOS (Featured)

En `featuredProjects`, edita:

```javascript
{
  id: 1,
  title: "Nombre del proyecto",
  client: "Cliente",
  year: "2024",
  url: "https://..." // link opcional
}
```

### Editar OTROS PROYECTOS

En `otherProjects`, agrega/edita con la misma estructura (sin el `url`).

### Cambiar colores

Los colores están en los className de Tailwind. Los principales son:
- `text-red-500` - Rojo vibrante (acento)
- `text-black` - Negro
- `text-gray-*` - Grises para texto secundario

Para cambiar colores, edita los valores en los `className`:
```javascript
className="text-red-500 hover:text-black"  // Rojo a negro al hover
```

Puedes cambiar a otros colores de Tailwind:
- `red-500`, `blue-500`, `green-500`, `purple-500`, `yellow-500`, etc.

### Cambiar links sociales

```javascript
social: {
  instagram: "https://www.instagram.com/TU_USUARIO/",
  linkedin: "https://linkedin.com/in/TU_PERFIL"
}
```

### Cambiar email de contacto

```javascript
contact: "tu@email.com"
```

---

## 📋 Estructura de archivos

```
portfolio-v2/
├── src/
│   ├── App.jsx           ← EDITA AQUÍ (toda la config)
│   ├── main.jsx          ← No tocar
│   └── index.css         ← Estilos globales
├── index.html            ← No tocar
├── package.json          ← No tocar
├── vite.config.js        ← No tocar
├── tailwind.config.js    ← No tocar
├── postcss.config.js     ← No tocar
├── vercel.json           ← No tocar
└── README.md             ← Este archivo
```

---

## 🎯 Páginas disponibles

- **HOME** - Presentación y bio
- **WORK** - Featured projects + otros proyectos
- **ART** - Link a Instagram + descripción
- **CONTACT** - Email y links sociales

---

## ✨ Lo que hace este sitio

✅ **Minimalista como Diego & Facha**
- Estructura limpia y editorial
- Proyectos como lista, no galería visual
- Navegación simple y directa

✅ **Tu estética**
- Negro + blanco + rojo vibrante
- Tipografía moderna
- Hover effects sutiles

✅ **Responsive**
- Se ve bien en mobile, tablet, desktop

✅ **Fácil de editar**
- Todo en un archivo (`App.jsx`)
- Cambios se ven automáticamente (en desarrollo)

---

## 🔧 Tecnología

- **React 18** - Interfaz
- **Tailwind CSS** - Estilos
- **Vite** - Build tool
- **Vercel** - Hosting (gratis)

---

## 📱 URLs

- **Local**: http://localhost:3000
- **Production**: https://muylucho.vercel.app (después de deployar)

---

## 🆘 Troubleshooting

**Los cambios no se ven:**
- Guarda el archivo (Ctrl+S)
- Recarga el navegador (Ctrl+Shift+R)

**Error al instalar dependencias:**
```bash
rm -rf node_modules
npm install
```

**Error al deployar en Vercel:**
- Asegúrate de que `package.json` y `vite.config.js` estén en la raíz
- Vercel detecta automáticamente que es un proyecto Vite

---

## 💡 Tips

- **Cambios en vivo**: En desarrollo, los cambios se ven instantáneamente
- **Colores Tailwind**: Puedes usar cualquier color de Tailwind (red, blue, green, purple, etc.)
- **Links**: Todos los links se abren en pestaña nueva
- **Responsive**: El sitio usa `md:` breakpoints para adaptar a pantallas grandes

---

**¿Dudas?** Hablá con Claude - puede ayudarte con cualquier cambio en el código.
