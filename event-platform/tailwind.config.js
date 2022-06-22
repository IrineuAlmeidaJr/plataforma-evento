/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Passa os arquivos que vamos utilizar no tailwindcss, no caso
    // todos os arquivos que estão na pasta src (sorce) e dentro de qualquer
    // pasta ali dentro, aquivos que terminarem com tsx são arquivos que vou
    // ter aquivo com estilzação do tailwind, ai removo todos os arquivo svg e css
    // que estão dentro da minha pasta src
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      colors: {
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
        },
        blue: {
          500: '#81D8F7',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        }
      },
    },
  },
  plugins: [],
}
