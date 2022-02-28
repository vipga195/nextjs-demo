module.exports = {
  future: {
    webpack5: true,
  },
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  webpack: function (config, options) {
    config.experiments = {};
    return config;
  },
}
