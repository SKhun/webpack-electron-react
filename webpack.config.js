var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [{
  entry: {
    index: './src/browser/main.js',
  },
  output: {
    path: path.resolve( __dirname, './app/browser'),
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  target: 'electron'
}, {
  entry: {
    index: './src/renderer/index.html'
  },
  output: {
    path: path.resolve(__dirname, 'app/renderer'),
    filename: 'index.js'
  },
  module: {
    loaders: [{
      test: /\.html$/,
      loader: "file?name=[name].[ext]"
    }]
  }
}, {
  entry: {
    style: './src/renderer/sass/style.scss'
  },
  output: {
    path: path.resolve(__dirname, 'app/renderer/css'),
    filename: 'index.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
    }, {
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
      loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
    }]
  },
  plugins: [
    new ExtractTextPlugin("./[name].css")
  ]
},{
  entry: {
    index: './src/renderer/app.jsx'
  },
  output: {
    path: path.resolve( __dirname, './app/renderer'),
    filename: '[name].js'
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "eslint-loader"
    }],
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }],
    eslint: {
        configFile: './.eslintrc'
    },
    //plugins: [
    //  webpack.optimize.UglifyJsPlugin()
    //],
    resolve: {
        extensions:  [ '', '.js', '.jsx' ]
    }
  }
}]
