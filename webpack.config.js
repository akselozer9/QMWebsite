const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
module.exports = {
    mode: 'production',
    entry: { 
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]'

    },
    devtool: "inline-source-map",
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3012,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
   
    module:{
        rules: [
            {
             test: /\.css$/,
             use: ['style-loader', 'css-loader'],
            },

            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets:[ ['@babel/preset-env',  {
                        include: [
                          '@babel/plugin-proposal-optional-chaining',
                          '@babel/plugin-proposal-nullish-coalescing-operator',
                          '@babel/plugin-proposal-numeric-separator',
                          '@babel/plugin-proposal-logical-assignment-operators',
                        ],
                        bugfixes: true,
                        loose: true,
                        modules: false,
                        targets: '> 1%, not dead, not ie 11, not op_mini all',
                      },
                    ],  '@babel/preset-react']
               
                }
                }
            },
            {
                test: /\.(glb|gltf|eot|ttf|woff)$/i,
                use: [
                    {
                     loader: 'file-loader',  
                    }
                   ]
            },
            {
                test: /\.svg$/i,
                use: [
                    {
                        loader: 'svg-inline-loader'
                    }
                ]
            }
        ],
        
    },
    plugins: [
        new HtmlWebpackPlugin({
            // title: 'Webpack App',
            template: path.join(__dirname, 'src', 'index.html')
        })
        ,
     new CopyWebpackPlugin({
            patterns: [{ 
                from: 'src/assets'
               }]
        })
        ,
    ]
    ,
    optimization: {
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
        runtimeChunk: true,
      }
}
