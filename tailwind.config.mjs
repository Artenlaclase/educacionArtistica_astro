import tailwindcssAnimated from 'tailwindcss-animated';
/** @type {import('tailwindcss').Config} */

export default {
    content: [
      "./src/**/*.{astro,html,js,jsx,ts,tsx,vue}", // Archivos que Tailwind escaneará en busca de clases
    ],
    theme: {
      extend: {
        // Aquí puedes extender la configuración predeterminada de Tailwind
        colors: {
          // Agregar o sobrescribir colores
          primary: "#3b82f6", // Ejemplo: un color personalizado llamado "primary"
        },
        fontFamily: {
          // Agregar fuentes personalizadas
          sans: ["Inter", "sans-serif"],
        },
        spacing: {
          // Agregar o sobrescribir espaciados
          "72": "18rem",
        },
      },
    },
    plugins: [
      // Aquí puedes agregar plugins de Tailwind
      require("@tailwindcss/forms"), // Ejemplo: plugin para estilos de formularios
      tailwindcssAnimated, // Plugin para animaciones
    ],
  };