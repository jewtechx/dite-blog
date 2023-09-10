/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2465C2",
        primary_light: "#5E90CC",
        secondary: "#010024",
        tertiary: "#FE9DE2",
        background: "hsla(222, 47%, 11%, 1)",
        dark: "#010024",
        darktxt: "#637381",
        darkBlue: "#151a33",
        lightgray : "#98A2B3",
        skills: "#2065D129",
        projects: "#161616",
        darknight: "#252A2F",
        icon: "#9E9E9E",
        sidebar: "#333333",
        active:'hsla(199, 89%, 49%, 1)',
      },
      fontFamily: {
        manrope: ["Manrope"],
      },
      backgroundColor: {
        'hsla-222-44-13-100': 'hsla(222, 44%, 13%, 1)',
      },
    },
  },
  plugins: [import("@tailwindcss/forms"), import("@tailwindcss/aspect-ratio")],
};
