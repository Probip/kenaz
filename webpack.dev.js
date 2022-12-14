const path=require('path');
const common=require("./webpack.common");
const webpack=require('webpack');
const json=require('./src/data/data.json');
//const {merge}=require("./webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { data } = require('jquery');
//const FsWebpackPlugin = require('fs-webpack-plugin');
//const HashedModuleIdsPlugin = require("webpack-hashed-module-id-plugin");
//import './src/data/data.json'
module.exports= {
    //entry:path.resolve(__dirname,'src/js/index.js'),
    entry: {
        main: [path.resolve(__dirname,'src/js/index.js'),path.resolve(__dirname,'src/js/file.js'), path.resolve(__dirname,'src/scss/main.scss'),path.resolve(__dirname,'src/data/data.json')],
    },
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
            {
                test:/\.html$/,
                use: ["html-loader"]
            },
            {
                test:/\.(svg|png|jpg|gif)$/i,
                type: "asset/resource",
                generator: {
                  filename: "imgs/[name][ext]",
                  //filename: "imgs/[name][hash][ext]",
                },
            },
            {
                test:/\.(ttf||woff||eot)$/i,
                type: "asset/resource",
                generator: {
                  filename: "fonts/[name][ext]",
                },
            },
            {
                test:/\.json$/,
                type: "asset/resource",
                generator: {
                    filename: "data/[name][ext]",
                }
            },
        ],
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
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
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
        new webpack.ProvidePlugin({
            'zoom':'jquery-zoom',
        }),
       /*new webpack.ids.HashedModuleIdsPlugin({
            context: path.resolve(__dirname,'src')
          }),*/
    ],
    /*externals: {
        zoom: 'jquery-zoom',
    }*/
};