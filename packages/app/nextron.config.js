const path = require('path');

module.exports = {
  webpack: {
    module: {
      rules: [
        {
          test: /\.(graphql)$/,
          exclude: /node_modules/,
          use: 'graphql-tag/loader',
        },
      ],
    },
    entry: path.resolve(__dirname, 'main/background.ts'),
    output: {
      path: path.resolve(__dirname, 'app'),
    },
  },
};
