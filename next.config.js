/** @type {import('next').NextConfig} */
const withMDX = require("@next/mdx")();

const nextConfig = {
  domains: ["images.unsplash.com"],
};

module.exports = withMDX(nextConfig);
