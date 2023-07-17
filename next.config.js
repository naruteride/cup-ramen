/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.danawa.com',
                port: "",
                pathname: '/prod_img/**',
            },
        ],
    },
}

module.exports = nextConfig
