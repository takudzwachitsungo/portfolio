export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Calibre", "SF Pro Display", "-apple-system", "system-ui", "sans-serif"],
        mono: ["SF Mono", "Fira Code", "Fira Mono", "monospace"],
      },
      colors: {
        navy: {
          lightest: "#233554",
          light: "#112240",
          DEFAULT: "#0a192f",
          dark: "#020c1b",
        },
        slate: {
          lightest: "#ccd6f6",
          light: "#a8b2d1",
          DEFAULT: "#8892b0",
          dark: "#495670",
        },
        green: {
          DEFAULT: "#64ffda",
        },
        background: "#0a192f",
        text: {
          primary: "#ccd6f6",
          secondary: "#8892b0",
        },
      },
    },
  },
  plugins: [],
};