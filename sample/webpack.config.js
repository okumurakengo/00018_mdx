const glob = require("glob");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: glob.sync("./src/*.js").reduce((entries, entry) => {
        return { ...entries, ...{ [entry.replace(/(\/src|\.js)/g, "")]: entry }};
    }, {}),
    output: {
        path: `${__dirname}/dist`,
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader"
            },
            {
                test: /\.mdx?$/,
                use: ["babel-loader", "@mdx-js/loader"]
            },
        ]
    },
    plugins: glob.sync("./src/*.js").map(entry => {
        return new HtmlWebpackPlugin({
            template: "template.html",
            chunks: [entry.replace(/(\/src|\.js|)/g, "")],
            filename: `${entry.replace(/(\/src|\.js|)/g, "")}.html`,
        })
    }),
    devServer: {
        contentBase: `${__dirname}/dist`,
        compress: true,
        port: 9000
    },
};
