const path=require('path')
const common=require("./webpack.common");
const webpack=require('webpack');
//const {merge}=require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports= {
    mode: 'production',
    //entry:path.resolve(__dirname,'src/js/index.js'),
    entry: {
        main: [path.resolve(__dirname,'src/js/index.js'),path.resolve(__dirname,'src/js/file.js'), path.resolve(__dirname,'src/scss/main.scss'),],
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'js/bundle[contenthash].js',
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
                loader: "html-loader",
                options: {
                    minimize: false,
                  },
            },
            {
                test:/\.(svg|png|jpg|gif)$/i,
                type: "asset/resource",
                generator: {
                  filename: "imgs/[name][hash][ext]",
                },
            },
            {
                test:/\.(ttf||woff||eot)$/i,
                type: "asset/resource",
                generator: {
                  filename: "fonts/[name][ext]",
                },
            },
        ],
    },/*
    resolve: {
        extensions: ['.js','.scss']
    },*/
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/template.html',
            minify: false,
        }),
        new HtmlWebpackPlugin({
            template: "./src/single.html",
            filename: "single.html",
            minify: false,
        }),
          new HtmlWebpackPlugin({
            template: "./src/category.html",
            filename: "category.html",
            minify: false,
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        })
    ],
};