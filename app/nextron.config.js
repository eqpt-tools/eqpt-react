const path = require('path');

console.log(path.resolve(__dirname, 'background.ts'));

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
    context: path.resolve(__dirname, 'background.ts'),
    output: {
      path: path.resolve(__dirname, 'dist'),
    },
  },
};
