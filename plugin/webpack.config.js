module.exports = {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader"
            },
            {
                test: /\.mdx?$/,
                use: [
                    "babel-loader", 
                    {
                        loader: "@mdx-js/loader",
                        options: {
                            remarkPlugins: [
                                require("remark-emoji"),
                                require("./myPlugin"),
                            ]
                        }
                    },
                ]
            },
        ]
    }
}
