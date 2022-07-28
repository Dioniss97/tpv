const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
	mode: 'development',
    module: {
    	rules: [
        {
            test: /\.(c|sc|sa)ss$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader
                },
                'css-loader',
                'sass-loader'
            ]
        }
      ]
    },
	plugins: [
        new MiniCssExtractPlugin({
            filename: 'stylesheet.css'
        })
    ]
};