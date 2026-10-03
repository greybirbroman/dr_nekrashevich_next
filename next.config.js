/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        qualities: [75, 85, 90, 100],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                pathname: '/**'
            }
        ]
    }
};

module.exports = nextConfig;
