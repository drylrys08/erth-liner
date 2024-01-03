/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./ImageLoader.tsx"
  }
};

module.exports = nextConfig;
