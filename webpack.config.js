module.exports = {
  mode: 'production',
  entry: `${__dirname}/src/js/index.js`,
  output: {
    path: `${__dirname}/docs`,
    filename: 'index.js',
    publicPath: "/docs/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')({ grid: true })]
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(gif|png|jpg|ico|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [],
  performance: {
    hints: false
  },
  devServer: {
    contentBase: `${__dirname}/docs`,
    port: 3000,
    hot: true,
    open: true,
    inline: true
  }
};
