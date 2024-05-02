// dependencies
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Mode
//   mode: 'production',

  // Entry
  entry: path.join(__dirname, '../../src/main.js'),

  // Output
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: '[name].js', // 'bundle.js',
  },

  // resolvable extensions
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js"],
  },
  
  // Loaders
  module: {
    rules: [
      { 
        test: /\.tsx?$/, 
        loader: "ts-loader" 
      },
      { // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        test: /\.js$/, 
        loader: "source-map-loader" 
      },
      {
        // checks for the files with the css extension
        test: /\.s[ac]ss$/i,
        // applies loader functionality in the order in the array
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        // Loads a SASS/SCSS file and compiles it to CSS
        loader: 'sass-loader'
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                "targets": "defaults" 
              }],
              '@babel/preset-react'
            ]
          }
        }]
      }
    ],
  },

  // Plugins
  plugins: [
    new HtmlWebpackPlugin({ 
      template: path.join(__dirname, '../../src/index.html'), 
    }),
  ],

}