module.exports = {
  entry: './src/js/main.js',
  output: {
    path: './dist/js',
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /.js$/,
        query: {
          presets: 'es2015'
        }
      }
    ]
  }
};

