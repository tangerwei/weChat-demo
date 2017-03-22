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
var config = {
    plugins: [commonPlugin, uglifyPlugin],
    entry: {
        test: path.resolve(__dirname, 'src/test.js'),
        root:path.resolve(__dirname, 'src/root.js')
    },
    //其他配置//[name].[hash].js
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
    },
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            'react': path.join(__dirname, './node_modules/react/dist/react.js'),
            'react-dom': path.join(__dirname, './node_modules/react-dom/dist/react-dom.js'),
            'flux/utils': path.join(__dirname, './node_modules/flux/utils.js'),
        }
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass'
        }]
    }, 
    externals: {
        React: 'window.React',
        ReactDOM: 'window.ReactDOM',
        SwiperF:'window.Swiper'
    },

};
module.exports = config;