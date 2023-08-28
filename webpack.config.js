const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    const production = env.production;

    return {
        entry: { main: './src/pages/index.js' },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: production
                ? "scripts/new_main.[contenthash].js"
                : "scripts/new_main.js",
            publicPath: '',
        },
        mode: 'development',
        devServer: {
            static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
            compress: true, // это ускорит загрузку в режиме разработки
            port: 8080,
            hot: true,
            open: true // сайт будет открываться сам при запуске npm run dev
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [production ? MiniCssExtractPlugin.loader : 'style-loader',
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1 }
                    },
                        'postcss-loader'
                    ]
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    type: "asset/resource",
                    generator: {
                        filename: "image/[hash][ext][query]"
                    }
                },
                {
                    test: /\.(woff(2)?|eot|ttf|otf)$/,
                    type: "asset/resource",
                    generator: {
                        filename: "fonts/[hash][ext][query]"
                    }
                },
                {
                    test: /\.js$/,
                    use: 'babel-loader',
                    exclude: '/node_modules/'
                }
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html' // путь к файлу index.html
            }),
            new MiniCssExtractPlugin({
                filename: production
                    ? "styles/new_main.[contenthash].css"
                    : "styles/new_main.css",
            })
        ]
    }

}