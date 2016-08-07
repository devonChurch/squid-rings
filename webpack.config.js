const CopyWebpackPlugin = require('copy-webpack-plugin');

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
            {test: /\.js$/, loaders: ['babel'], exclude: /node_modules/}
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: './index.html', to: './index.html'}
        ])
    ]
};
