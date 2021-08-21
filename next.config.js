module.exports = {
  webpack: (config, { webpack }) => {
    config.plugins = config.plugins || [];

    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));

    config.module.rules.push({
      test: /.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            removeElementsByAttr: true,
            inlineStyles: true,
            minifyStyles: true,
            removeScriptElement: true
          }
        }
      ]
    });

    return config;
  },
  poweredByHeader: false,
  publicRuntimeConfig: {},
  serverRuntimeConfig: {}
};
