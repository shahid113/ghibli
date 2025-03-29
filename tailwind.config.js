/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ghibli: {
          cream: '#f4f1de',
          sage: '#81b29a',
          rust: '#e07a5f',
          navy: '#3d405b',
          yellow: '#f2cc8f',
        },
      },
      fontFamily: {
        ghibli: ['Ghibli', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1578632292335-df3abbb0d586?auto=format&fit=crop&w=2000')",
      },
    },
  },
  plugins: [],
};