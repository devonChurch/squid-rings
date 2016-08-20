const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
// const cssnext = require('postcss-cssnext')();

module.exports = {
    context: `${__dirname}/src`,
    devtool: 'source-map',
    // entry: './entry.js',
    entry: ['babel-polyfill', './entry.js'],
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
            {test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass'], exclude: /node_modules/}, // 'style', 'css?sourceMap!postcss-loader!sass'} // 'style!css!postcss-loader!sass'
            // {test: /\.css$/, loaders: ['style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'postcss'], exclude: /node_modules/}


            /*
            {
              test: /\.css$/,
              loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            }
             */
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: './index.html', to: './index.html'}
        ])
    ],
    postcss() {
        return [precss, autoprefixer];
        // return [precss, cssnext, autoprefixer];
    },
    // sassLoader: {
    //     includePaths: [path.resolve(__dirname, 'node_modules')]
    // }
};
