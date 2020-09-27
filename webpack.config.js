const path = require('path');
const webpack = require('webpack');

const paths = {
    src: path.resolve(__dirname, 'assets'),
    dist: path.resolve(__dirname, 'static')
};

module.exports = {
    context: paths.src, 
    entry: {
        app: './index'
    },
    
    output: {
        path: paths.dist, 
        filename: '[name].bundle.js'
    },
    
    resolve: {
        extensions: ['.ts', '.tsx']
    },

    devtool: 'inline-source-map',
    
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    }
};