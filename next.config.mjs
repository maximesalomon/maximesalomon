/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  turbopack: {
    root: process.cwd(),
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
