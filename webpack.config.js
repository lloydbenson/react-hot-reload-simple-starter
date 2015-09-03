var Path = require('path');

var Clean = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Minimist = require('minimist');
var Webpack = require('webpack');

var Rupture = require('rupture');
var AutoPrefixer = require('autoprefixer-stylus');

var argv = Minimist(process.argv);
var plugins = [];
var entry = ['./style/main.styl', './js/app.js'];

plugins.push(new Webpack.EnvironmentPlugin('NODE_ENV'));

if (argv.prod) {
  plugins.push(new Webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
  }));
  plugins.push(new Clean(['build']));
  plugins.push(new Webpack.optimize.OccurenceOrderPlugin(true));
  plugins.push(new HtmlWebpackPlugin({
    template: 'index.prod.template',
    inject: 'body'
  }));
}
else {
  entry.unshift('webpack/hot/dev-server');
  plugins.push(new HtmlWebpackPlugin({
    template: 'index.dev.template',
    inject: 'body'
  }));
}

module.exports = {
  context: Path.join(process.cwd(), 'client'),
  entry: {
    app: entry
  },
  output: {
    path: './build',
    filename: '[name]-[hash].js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: [
        Path.resolve(process.cwd(), 'client/js')
      ],
      loader: 'babel?optional[]=runtime'
    }, {
      test: /\.styl$/,
      loader: 'style-loader!css-loader!stylus-loader?paths=node_modules/jeet/stylus/'
    }, {
      test: /\.(ttf|eot|svg|png)$/,
      loader: 'file'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.styl', '.png'],
    modulesDirectories: ['node_modules']
  },
  stylus: {
    use: [Rupture(), AutoPrefixer()]
  },
  plugins: plugins
};
