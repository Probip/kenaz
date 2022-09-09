const path=require('path')
const common=require("./webpack.common");
//const {merge}=require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports= {
    mode: 'production',
    entry:path.resolve(__dirname,'src/index.js'),
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle[contenthash].js',
        clean: true,
    },
    module: {
        rules:[
            {
                test:/\.scss$/,
                use:[MiniCssExtractPlugin.loader,"css-loader","sass-loader"],
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
            {
                test:/\.html$/,
                use: ["html-loader"]
            },
            {
                test:/\.(svg|png|jpg)$/i,
                type: "asset/resource",
                generator: {
                  filename: "imgs/[name][hash][ext]",
                },
            },
            {
                test:/\.(ttf)$/i,
                type: "asset/resource",
                generator: {
                  filename: "fonts/[name][ext]",
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/template.html',
            minify: false,
        }),
        new HtmlWebpackPlugin({
            template: "./src/single.html",
            filename: "single.html",
        }),
          new HtmlWebpackPlugin({
            template: "./src/category.html",
            filename: "category.html",
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        }),
    ],
};