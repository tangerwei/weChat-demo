var webpack = require('webpack');
var path = require('path');
var commonPlugin = new webpack.optimize.CommonsChunkPlugin("common");
var uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
    output: {
        comments: false,
    },
    compress: {
        warnings: false
    }
});
var htmlWebpackPlugin = require("html-webpack-plugin");
var htmlsc = new htmlWebpackPlugin({
    filename:'index.html',
    template:path.resolve(__dirname, 'codeForBlog/index.html')
});
var config = {
    plugins: [commonPlugin, uglifyPlugin, htmlsc],
    entry: {
        index: path.resolve(__dirname, 'codeForBlog/index.js')
    },
    //其他配置//[name].[hash].js
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'codeForBlog/build'),
    },
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            'react': path.join(__dirname, './node_modules/react/dist/react.min.js'),
            'react-dom': path.join(__dirname, './node_modules/react-dom/dist/react-dom.min.js'),
            'redux': path.join(__dirname, './node_modules/redux/dist/redux.js')
        }
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            loaders: ['style-loader','css-loader']
        }]
    }

};
module.exports = config;