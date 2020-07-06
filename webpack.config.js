const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const srcPath = path.join(__dirname, './src');
// const nodeExternals = require('webpack-node-externals');
 module.exports = {
    devtool: 'inline-source-map',
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    resolve: {
        extensions: [ '.js', '.jsx'],
        alias: {
          actions: `${srcPath}/actions/`,
          constants: `${srcPath}/constants/`,
          components: `${srcPath}/components/`,
          sources: `${srcPath}/sources/`,
          stores: `${srcPath}/stores/`,
          pages: `${srcPath}/pages/`,
          styles: `${srcPath}/styles/`
        }
      },
    module: {
        rules: [{
            test: /\.css$/,
            loader:['style-loader', 'css-loader']
        }, {
            test: /\.scss$/,
            loader: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'img/[name].[hash:7].[ext]'
            }
        }, {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    devServer: {
        contentBase: './build',
        port: 8081,
        inline: true,
        hot: true
    },
    // externals: [nodeExternals()],
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({
            template: './src/index.html'
        })
    ]
}