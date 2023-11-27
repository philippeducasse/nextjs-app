/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
      enableUndici: true
    },
    distDir: 'build',
  };
  
  module.exports = nextConfig;