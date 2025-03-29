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
        'hero-pattern': "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-PxxaH6jKQxD-V_dxQcXGrZer5YBp-oAuu66BssHZ__fy99rhqIgQaVE6I6k1FAoIVIHaGXUL2Bnlep9vJZZbQUpLBDFaXTd4FT__vreA-d0a7ZyqNEnigkvC5CdlBjW_u4eCTxPigUjGdnLLFcNIb_8g_rLKxT_Stda-DdjXzU5bwSb-osBHewhyphenhyphendw/s1500/139475.jpeg')",
      },
    },
  },
  plugins: [],
};