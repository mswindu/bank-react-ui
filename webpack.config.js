const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
//const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: '#eval-source-map',
    entry: path.join(__dirname, 'src', 'main.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    devServer: {
        //contentBase: './dist',
        //compress: true,
        port: 8000,
        allowedHosts: [
            'localhost:9000'
        ],
        proxy: {
            '/api': {
                target: 'http://localhost:9000',
                changeOrigin: true
            }
        }
    },
    module: {
        rules: [
          {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
              loaders: {
                // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                // the "scss" and "sass" values for the lang attribute to the right configs here.
                // other preprocessors should work out of the box, no loader config like this necessary.
                'scss': 'vue-style-loader!css-loader!sass-loader',
                'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
              }
              // other vue-loader options go here
            }
          },
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
          },
          {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
              objectAssign: 'Object.assign'
            }
          },
          {
            test: /\.css$/,
            loader: ['style-loader', 'css-loader']
          },
          {
            test: /\.styl$/,
            loader: ['style-loader', 'css-loader', 'stylus-loader']
          }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        // new HtmlWebpackPlugin({
        //     filename: 'index.html',
        //     template: 'public/index.html'
        // })
    ],
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
          'vue$': 'vue/dist/vue.esm.js',
          'public': path.resolve(__dirname, './public')
        }
    }
}