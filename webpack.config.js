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
})
var htmlWebpackPlugin = require("html-webpack-plugin");
var htmlsc = new htmlWebpackPlugin({
    filename:'iframe.html',
    template:path.resolve(__dirname, 'temple.html'),//需要编译的模板,可以是jade等第三方模板引擎也可以说纯html页面
})
var config = {
    plugins: [commonPlugin, uglifyPlugin, htmlsc],
    entry: {
        test: path.resolve(__dirname, 'src/test.js'),
        root: path.resolve(__dirname, 'src/root.js')
    },
    //其他配置//[name].[hash].js
    output: {
        filename: '[name].build.js',
        path: path.resolve(__dirname, 'build'),
    },
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            'react': path.join(__dirname, './node_modules/react/dist/react.js'),
            'react-dom': path.join(__dirname, './node_modules/react-dom/dist/react-dom.js'),
            'flux/utils': path.join(__dirname, './node_modules/flux/utils.js'),
            'swiper': path.join(__dirname, './node_modules/swiper/dist/js/swiper.js')
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