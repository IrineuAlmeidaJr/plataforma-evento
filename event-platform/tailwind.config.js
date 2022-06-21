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
    extend: {},
  },
  plugins: [],
}
