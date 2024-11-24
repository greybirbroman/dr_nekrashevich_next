/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            backgroundImage: {
                'link-mail': "url('')"
            },
            colors: {
                primary: '#27333E',
                secondary: '#4A515A',
                tertiary: '#A0A3A9'
            },
            fontFamily: {
                nunito: ['var(--font-nunito)']
            },
            screens: {
                sm: { min: '375px', max: '767px' },
                // => @media (min-width: 320px and max-width: 992px) { ... }

                md: { min: '768px', max: '1279px' },
                // => @media (min-width: 993px and max-width: 1279px) { ... }

                lg: { min: '1280px' }
                // => @media (min-width: 1280px) { ... }
            },
            padding: {
                sm: '20px',
                md: '30px',
                lg: '60px'
            },
            margin: {
                sm: '20px',
                md: '30px',
                lg: '60px'
            },
            fontSize: {
                'sm-base': ['14px', '120%'],
                'sm-md': ['18px', '120%'],
                'sm-lg': ['18px', '120%'],

                'md-base': ['16px', '20px'],
                'md-md': ['18px', '24px'],
                'md-lg': ['20px', '24px'],

                'lg-base': ['18px', '28px'],
                'lg-md': ['20px', '32px'],
                'lg-lg': ['24px', '36px'],

                'h1-sm': ['28px', '105%'],
                'h1-md': ['36px', '105%'],
                'h1-lg': ['40px', '80%'],

                'h2-sm': ['24px', '30px'],
                'h2-md': ['30px', '38px'],
                'h2-lg': ['36px', '44px'],

                'h3-sm': ['20px', '28px'],
                'h3-md': ['24px', '32px'],
                'h3-lg': ['30px', '38px'],

                'ui-sm': ['14px', '100%'],
                'ui-md': ['16px', '100%'],
                'ui-lg': ['16px', '100%'],

                'text3-sm': ['12px', '100%'],
                'text3-md': ['14px', '100%'],
                'text3-lg': ['14px', '100%'],
            }
        }
    },
    plugins: []
};
