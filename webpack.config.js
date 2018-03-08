var path = require('path')
var webpack = require('webpack')
var ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
var Visualizer = require('webpack-visualizer-plugin')
var resolve = dir => path.join(__dirname, dir)

module.exports = {
  entry: {
    main: './src/main.js',
    vendor: ['pixi.js', 'gown']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: '[id].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'css-loader'
        ],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ["env", "stage-3", "es2015"]
        },
        // exclude: /node_modules/
        include: [
          // 只去解析运行目录下的 src 和 demo 文件夹
          path.join(process.cwd(), './src'),
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
      // "pixi.js$": "pixi.js/dist/pixi.min.js"
    },
    modules: [
      resolve('node_modules')
    ],
    extensions: ['.js', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    disableHostCheck:true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   // sourceMap: true,
    //   compress: {
    //     warnings: false
    //   }
    // }),
    new ParallelUglifyPlugin({
      cacheDir: '.cache/',
      uglifyJS:{
        output: {
          comments: false
        },
        compress: {
          warnings: false,
          drop_debugger: true,
          drop_console: true
        }
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
