/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.sanity.io'],
        unoptimized: true
    },
    output: 'export',
   
};

module.exports = nextConfig;
