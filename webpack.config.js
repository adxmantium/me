const path = require("path");

module.exports = {

    entry: ["./src/index.js"],

    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js",
        sourceMapFilename: "bundle.map.js"
    },

    devtools: "#source-map",

    module: {
        rules: [

            // babel-loader: transform es6 to es5
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                }
            }
        ]
    }
};