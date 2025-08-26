/** @type {import('next').NextConfig} */
const nextConfig = {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "fakestoreapi.com",
      port: "",
      pathname: "/img/**",
    },
  ],
};
export default nextConfig;
