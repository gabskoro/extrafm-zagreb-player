const path = require('path');

module.exports = {
    outputPath: path.resolve(__dirname, '../', 'dist'),
    vuePath: path.resolve(__dirname, '../', 'node_modules/vue/dist/vue.esm.js'),
    imagesOutputPath: 'images/',
    // To enable absolute importing
    modulesPath: [
        path.resolve(__dirname, '../', 'node_modules'),
        path.resolve(__dirname, '../', 'app')
    ]
};
