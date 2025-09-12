/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "",
        pathname: "/img/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**", // 👈 acepta cualquier carpeta de Cloudinary
      },
      {
        protocol: "https",
        hostname: "amuli.co",
        pathname: "/cdn/shop/files/**",
      },
    ],
  },
};

export default nextConfig;
