const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  future: {
    webpack5: true,
  },
  images: {
    domains: ['raw.githubusercontent.com'],
  },

  webpack: function (config, options) {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };
    return config;
  },
}
