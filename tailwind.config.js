/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      flex: {
        '0': '0 0 auto',
        '1': '1 0 auto',
      },
      backgroundImage: {
        'link-mail': "url('')"
      },

      screens: {
        'sm': {'min': '320px', 'max': '992px'},
        // => @media (min-width: 320px and max-width: 767px) { ... }
  
        'md': {'min': '992px', 'max': '1279px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
  
        'lg': '1280px'
        // => @media (min-width: 1024px) { ... }
  
        // 'xl': '1440px',
        // // => @media (min-width: 1280px) { ... }
  
      },
    },
  },
  plugins: [],
}
