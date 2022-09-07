const HtmlWebpackPlugin = require('html-webpack-plugin')
const path=require('path')

module.exports={
    entry:path.resolve(__dirname,'src/index.js'),
    module: {
        rules:[
            {
                test:/\.scss$/,
                use:["style-loader","css-loader","sass-loader"],
            },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/template.html',
        }),
        new HtmlWebpackPlugin({
            template: "./src/single.html",
            filename: "single.html",
        }),
          new HtmlWebpackPlugin({
            template: "./src/category.html",
            filename: "category.html",
        }),
    ],
}