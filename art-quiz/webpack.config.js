const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports={
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry:{
        main:'./index.js',
        settings:'./settings.js',
        category:'./category.js',
        artistsQuiz: './artistsQuiz.js',
        questionPage: './questionPage.js',
        constants: './constants.js'
    },
    output: {
        filename:'[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer:{
        port: 4200
    },
    plugins:[
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};