const path=require('path');
const common=require("./webpack.common");
const webpack=require('webpack');
//const {merge}=require("./webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports= {
    //entry:path.resolve(__dirname,'src/js/index.js'),
    entry: {
        main: [path.resolve(__dirname,'src/js/index.js'),path.resolve(__dirname,'src/js/file.js'), path.resolve(__dirname,'src/scss/main.scss'),],
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
            'jquery-zoom':'jquery-zoom',
        }),
    ],
    externals: {
        zoom: 'jquery-zoom',
    }
};