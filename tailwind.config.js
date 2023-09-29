/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'link-mail': "url('')"
      },
      fontFamily: {
        roboto: ['var(--font-roboto']
      },
      screens: {
        // 'xs': {'min': '320px', 'max': '549px'},
        'sm': {'min': '320px', 'max': '992px'},
        // => @media (min-width: 320px and max-width: 767px) { ... }
  
        'md': {'min': '993px', 'max': '1279px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
  
        'lg': {min: '1280px'},
        // => @media (min-width: 1024px) { ... }
  
        // 'xl': '1440px',
        // // => @media (min-width: 1280px) { ... }
  
      },
    },
  },
  plugins: [],
}
