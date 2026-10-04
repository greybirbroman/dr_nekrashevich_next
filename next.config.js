/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        qualities: [75, 85, 90, 100],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                pathname: '/**'
            }
        ]
    },
    output: 'export'
};

module.exports = nextConfig;
