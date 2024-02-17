/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}', "./node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}",],
  theme: {
    extend: {
      colors: {
        bgLight: '#E9E7E1',
        bgDark: '#D7D4C9',
        black: '#1B1B1B'
      },
      screens: {
        'sm': '640px',
        'md': '769px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
    fontFamily: {
      sans: ['Brandon Grotesque', 'ui-sans-serif', 'system-ui', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      serif: ['Garamond Premiere Pro', 'ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif']
    }
  },
  plugins: [require('flowbite/plugin')],
}

