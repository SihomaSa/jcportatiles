# JC Portátiles — Sitio Web

Página web para JC Portátiles, construida con **React + Vite**, lista para desplegar en **Firebase Hosting**.

---

## 🚀 Pasos para desplegar en Firebase

### 1. Instalar dependencias del proyecto

```bash
cd jcportatiles
npm install
```

### 2. Verificar que funciona en local

```bash
npm run dev
```

Abre http://localhost:5173 en tu navegador.

### 3. Instalar Firebase CLI (solo la primera vez)

```bash
npm install -g firebase-tools
```

### 4. Iniciar sesión en Firebase

```bash
firebase login
```

### 5. Crear proyecto en Firebase Console

- Ve a https://console.firebase.google.com
- Crea un nuevo proyecto (ej: `jcportatiles`)
- Copia el **Project ID** (ej: `jcportatiles-abc12`)

### 6. Actualizar el Project ID en `.firebaserc`

Abre `.firebaserc` y reemplaza `TU-PROYECTO-FIREBASE-ID` con tu Project ID real:

```json
{
  "projects": {
    "default": "jcportatiles-abc12"
  }
}
```

### 7. Construir el proyecto

```bash
npm run build
```

Esto genera la carpeta `dist/`.

### 8. Desplegar a Firebase

```bash
firebase deploy
```

¡Listo! Firebase te dará la URL pública de tu sitio.

---

## 📁 Estructura del proyecto

```
jcportatiles/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── InfoBar.jsx
│   │   ├── Services.jsx
│   │   ├── WhyUs.jsx
│   │   ├── CTABanner.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
├── firebase.json
└── .firebaserc
```

---

## ✏️ Personalización rápida

| Qué cambiar | Dónde |
|---|---|
| Teléfono | `Navbar.jsx`, `CTABanner.jsx`, `Contact.jsx` |
| Dirección | `InfoBar.jsx`, `Contact.jsx` |
| Horario | `InfoBar.jsx`, `WhyUs.jsx` |
| Servicios | `Services.jsx` |
| Colores principales | `index.css` (variables `:root`) |
