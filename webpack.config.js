const webpack = require('webpack'),
  path = require('path');

module.exports = {
  entry: path.join(__dirname, '/app/npm/app.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "./app/npm")
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.Tether': 'tether',
      tether: 'tether',
      Tether: 'tether'
        // Tether: ['tether.min.js', 'default'],
    })
  ],
};
