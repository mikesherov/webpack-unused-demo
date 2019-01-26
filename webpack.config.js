/* eslint-env node */
const UnusedFilesPlugin = require('unused-files-webpack-plugin').default;

module.exports = (env) => {
    const config = {
        entry: './src/index.js'
    };

    if (env && env.unused) {
        config.plugins = [
            new UnusedFilesPlugin({
                failOnUnused: true,
                patterns: ['src/*.js']
            })
        ]
    }

    return config;
};
