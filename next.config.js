module.exports = {
  swcMinify: true,
  output: "standalone",
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      buffer: false,
    };
    return config;
  },
};
