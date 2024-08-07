/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx}',
    './index.html'
  ],
  theme: {
    extend: {
      colors:{
        'background' : 'white',
        'navbarbg': '#FFFFDB',
        'button' : '#159A9C',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

