/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx}',
    './index.html'
  ],
  theme: {
    extend: {
      colors:{
        'background' : '#EAE8FF',
        'spacecadet' : '#25283D',
      }
    },
  },
  plugins: [],
}

