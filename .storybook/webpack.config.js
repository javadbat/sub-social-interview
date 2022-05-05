const path = require('path');

module.exports = async ({ config }) => {
  // fonts
  config.module.rules.push({
    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
    type: 'asset/resource',
    generator: {
      filename: 'src/Styles/[contenthash][ext][query]'
    },
    include:path.resolve(__dirname,'../')
  });
  return config;
};