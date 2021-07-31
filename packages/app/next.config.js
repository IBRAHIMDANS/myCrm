const withImages = require("next-images");

module.exports = {
  reactStrictMode: true,
  esModule: true,
  crossOrigin: "anonymous",
  env: {
    PORT: 3001,
  },
  async rewrites() {
    return [
      //{
      //  source: '/login',
      //  sensitive: false,
      //  destination: '/login',
      //},
    ]
  },
}
