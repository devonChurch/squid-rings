const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

module.exports = {
    context: `${__dirname}/src`,
    devtool: 'source-map',
    entry: './entry.js',
    output: {
        path: `${__dirname}/dist`,
        filename: 'squid-rings.js'
    },
    module: {
        preLoaders: [
            {test: /\.js$/, loaders: ['eslint'], include: `${__dirname}/src`}
        ],
        loaders: [
            {test: /\.js$/, loaders: ['babel'], exclude: /node_modules/},
            {test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass'], exclude: /node_modules/} // 'style', 'css?sourceMap!postcss-loader!sass'} // 'style!css!postcss-loader!sass'
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: './index.html', to: './index.html'}
        ])
    ],
    postcss() {
        return [precss, autoprefixer];
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, 'node_modules')]
    }
};
