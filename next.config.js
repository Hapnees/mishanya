/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `@import "./src/styles/vars.scss"; @import "./src/styles/ui-kit.scss";`,
  },
}

module.exports = nextConfig
