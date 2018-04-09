const HtmlWebpackPlugin = require('html-webpack-plugin')

const conf = {
    src: __dirname + '/src',
    dist: __dirname + '/dist'
};

module.exports = {
    entry: [
        conf.src + '/app.js'
    ],
    output: {
        filename: 'bundle.js',
        path: conf.dist
    },
    module: {
      rules: [
          {
            enforce: 'pre',
            test: /\.js$/,
            include: conf.src,
            exclude: /node_modules/,
            loader: 'eslint-loader'
          },
          {
              test: /\.js$/,
              include: conf.src,
              loader: 'babel-loader'
          }
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'src/assets/index.html'
        })
    ]
};
