# Next.js - Getting Started

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

Laboratorio practico de **Next.js** con ejemplos de renderizado del lado del cliente (CSR) y del servidor (SSR). Incluye una lista de productos filtrable por categoria usando React hooks (`useState` y `useEffect`).

---
### Vista de la página de inicio

![Página de inicio](https://github.com/NinaDIV/Hola-mundo-en-nextjs/blob/main/nextjs-lab/hola-mundo/src/imagenes/1.png?raw=true)


### Vista de la página de tarea (lista de productos)

 ![Página de tarea](https://github.com/NinaDIV/Hola-mundo-en-nextjs/blob/main/nextjs-lab/hola-mundo/src/imagenes/2.png?raw=true)


## Estructura del proyecto

- `src/app/page.tsx`: Archivo principal con ejemplos de CSR y SSR.
- `src/app/tarea/page.tsx`: Página con la lista de productos y filtro por categoría.
- `public/`: Carpeta para recursos estáticos (imágenes, iconos, etc.).
- `.gitignore`: Archivo para ignorar dependencias y archivos temporales.
 

---

## Tecnologías usadas

- Next.js 13+
- React 18+
- TypeScript
- CSS (Tailwind CSS para estilos)

---

## Cómo ejecutar el proyecto

- Clonar este repositorio
- Instalar las dependencias

  ```bash

  cd Hola-mundo-en-nextjs\nextjs-lab\hola-mundo>

  (opcional : en caso de estar en un red con proxies o certificados interceptados: npm config set strict-ssl false)
  
  npm install

  npm run dev
