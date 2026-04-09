/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    compress: true,
    experimental: { 
        viewTransition: true,
        optimizePackageImports: ["motion/react", "motion/react-m"]
    },
    allowedDevOrigins: ["localhost:3000"],
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.pexels.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "github.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
