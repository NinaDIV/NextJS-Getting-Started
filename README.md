# Introducción a Next.js — Renderizado CSR y SSR con React

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)

Laboratorio práctico introductorio a **Next.js**: estructura de páginas, rutas y renderizado. Incluye ejemplos de renderizado del lado del cliente (CSR) y del servidor (SSR), además de una lista de productos filtrable por categoría usando React hooks (`useState` y `useEffect`). Punto de partida para entender el framework de React para producción.

## 📚 Temas cubiertos

- Renderizado del lado del cliente (CSR) y del servidor (SSR) en Next.js.
- Enrutamiento basado en archivos con el App Router (`src/app/`).
- Manejo de estado y efectos con los hooks `useState` y `useEffect`.
- Filtrado de una lista de productos por categoría.

## 🖼️ Capturas

### Vista de la página de inicio

![Página de inicio](https://github.com/NinaDIV/Hola-mundo-en-nextjs/blob/main/nextjs-lab/hola-mundo/src/imagenes/1.png?raw=true)

### Vista de la página de tarea (lista de productos)

![Página de tarea](https://github.com/NinaDIV/Hola-mundo-en-nextjs/blob/main/nextjs-lab/hola-mundo/src/imagenes/2.png?raw=true)

## 🛠️ Tecnologías

| Tecnología | Versión | Uso |
|---|---|---|
| Next.js | 13+ | Framework de React (App Router, SSR/CSR) |
| React | 18+ | Librería de interfaz de usuario |
| TypeScript | — | Tipado estático del código |
| Tailwind CSS | — | Estilos utilitarios |

## ✅ Requisitos previos

Antes de ejecutar el proyecto necesitas tener instalado:

- **Node.js 18 LTS o superior** — incluye `npm` (verifica con `node -v` y `npm -v`).
- **Git** — para clonar el repositorio.
- Un navegador web moderno (Chrome, Edge, Firefox).

No se requieren variables de entorno ni servicios externos.

## 🚀 Instalación y ejecución

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/NinaDIV/NextJS-Getting-Started.git
   ```

2. Entrar a la carpeta de la aplicación (el proyecto vive dentro de `nextjs-lab/hola-mundo`):

   ```bash
   cd NextJS-Getting-Started/nextjs-lab/hola-mundo
   ```

3. (Opcional) Si estás en una red con proxies o certificados interceptados:

   ```bash
   npm config set strict-ssl false
   ```

4. Instalar las dependencias:

   ```bash
   npm install
   ```

5. Iniciar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

   Abre [http://localhost:3000](http://localhost:3000) en el navegador. Verás la página de inicio con los ejemplos de CSR/SSR; la lista de productos con filtro está en la ruta [`/tarea`](http://localhost:3000/tarea).

### Build de producción

```bash
npm run build
npm start
```

## 📂 Estructura del proyecto

```
NextJS-Getting-Started/
├── .gitignore              # Ignora dependencias y archivos temporales
└── nextjs-lab/
    └── hola-mundo/
        ├── src/
        │   ├── app/
        │   │   ├── page.tsx        # Página principal con ejemplos de CSR y SSR
        │   │   └── tarea/
        │   │       └── page.tsx    # Lista de productos con filtro por categoría
        │   └── imagenes/           # Capturas de pantalla del laboratorio
        └── public/                 # Recursos estáticos (imágenes, iconos, etc.)
```
