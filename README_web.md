# sgarciad.me - Sitio web personal

|                          |                                                         |
| ------------------------ | ------------------------------------------------------- |
| **IDEs**                 | [![vscode-badge]][vscode-web]                           |
| **Lenguajes y entornos** | [![ts-badge]][ts-web] [![node-badge]][node-web]         |
| **Estilos**              | [![tailwind-badge]][tailwind-web]                       |
| **Frameworks**           | [![astro-badge]][astro-web] [![react-badge]][react-web] |
| **Deploy**               | [![gh-pages-badge]][gh-pages-web]                       |
| **Gestor de paquetes**   | [![pnpm-badge]][pnpm-web]                               |

## 🚀 Estructura del proyecto

```
/
├── .github/                    Directorio de GitHub
├── .vscode/                    Directorio de VSCode
├── lib/                        Librerías
├── public/                     Archivos web públicos
├── src/                        Carpeta principal
│   ├── assets/                 Contenido estático
│   ├── components/             Componentes de react
│   ├── layouts/                Layouts de la página
│   └── pages/                  Páginas
│       ├── index.astro           * Página de inicio
│       └── proximamente.astro    * Página 'próximamente'
├── .gitignore                  * Archivos y carpetas ignoradas por git
├── .prettierrc.cjs             * Configuración de prettier
├── astro.config.mjs            * Configuración de Astro
├── package.json                * Configuración de proyecto de Node.js
├── pnpm-lock.yaml              * Archivo gestor de paquetes
├── README_web.md               * README sitio web
├── README.md                   * README repositorio
├── tailwind.config.cjs         * Configuración tailwindcss
└── tsconfig.json               * Configuración TypeScript
```

## 🧞 Comandos

Los siguientes comandos pueden ser ejecutados por un terminal ubicado en la raíz del proyecto:

| Comando          | Descripción                                                          |
| :--------------- | :------------------------------------------------------------------- |
| `pnpm install`   | Instala dependencias                                                 |
| `pnpm dev`       | Inicia servidor de desarrollo en `localhost:3000`                    |
| `pnpm build`     | Genera el build de la aplicación en el directorio `./dist/`          |
| `pnpm preview`   | Genera una vista previa del build de la aplicación                   |
| `pnpm astro ...` | Ejecuta comandos de la CLI de astro, como `astro add`, `astro check` |

[vscode-badge]: https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?logo=visualstudiocode&logoColor=fff&style=for-the-badge
[vscode-web]: https://code.visualstudio.com/
[ts-badge]: https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=for-the-badge
[ts-web]: https://www.typescriptlang.org/
[node-badge]: https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=for-the-badge
[node-web]: https://nodejs.org/
[tailwind-badge]: https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=for-the-badge
[tailwind-web]: https://tailwindcss.com/
[astro-badge]: https://img.shields.io/badge/Astro-FF5D01?logo=astro&logoColor=fff&style=for-the-badge
[astro-web]: https://astro.build/
[react-badge]: https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=for-the-badge
[react-web]: https://reactjs.org/
[pnpm-badge]: https://img.shields.io/badge/pnpm-F69220?logo=pnpm&logoColor=fff&style=for-the-badge
[pnpm-web]: https://pnpm.io
[gh-pages-badge]: https://img.shields.io/badge/GitHub%20Pages-222?logo=githubpages&logoColor=fff&style=for-the-badge
[gh-pages-web]: https://pages.github.com
