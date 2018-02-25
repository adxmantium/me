const path = require("path");
const webpack = require('webpack');

module.exports = {

    entry: ["./src/index.js"],

    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js",
    },

    module: {
        rules: [

            // resolve .scss files using css-loader and style-loader modules
            {
                test: /\.scss$/, 
                use: ['style-loader', 'css-loader', 'sass-loader']
            },

            // babel-loader: transform es6 to es5
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {loader: "babel-loader"}
            } 

        ]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
    ]
};