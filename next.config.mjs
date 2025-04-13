/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable tracing to avoid permission issues during build
  output: 'standalone',
  distDir: 'build',
  outputFileTracing: false
};

export default nextConfig;
