const commonConfig = require('./webpack-utils/webpack.common');
const webpackMerge = require('webpack-merge');

module.exports = (env) => {
    const envConfig = require(`./webpack-utils/webpack.${env}`);

    return webpackMerge(commonConfig, envConfig);
};
