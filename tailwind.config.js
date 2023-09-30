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
        'link-mail': "url('')",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      screens: {
        sm: { min: '320px', max: '992px' },
        // => @media (min-width: 320px and max-width: 992px) { ... }

        md: { min: '993px', max: '1279px' },
        // => @media (min-width: 993px and max-width: 1279px) { ... }

        lg: { min: '1280px' },
        // => @media (min-width: 1280px) { ... }
        // 'xl': '1440px',
        // // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
};
