/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Change the output directory from dist to out
  distDir: "out",
};

module.exports = nextConfig;
