/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true, // Disable default image optimization
    },
    assetPrefix: isProd ? '/mhcorp/' : '',
    basePath: isProd ? '/mhcorp' : '',
    output: 'export'
};

export default nextConfig;