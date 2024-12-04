/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.serconsrus.ru"], // Добавьте сюда нужный домен
  },
  sassOptions: {
    includePaths: ["./src/styles/abstracts"],
    additionalData: `@import "index.scss";`,
  },
};

export default nextConfig;
