/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        bgLight: '#E9E7E1'
      },
      screens: {
        'tablet': '768px',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

