/*
 * @Descripttion: 使用sass-resources-loader引入多个全局sass文件
 * @Author: xianghaifeng
 * @Date: 2024-06-20 11:18:36
 * @LastEditors: xianghaifeng
 * @LastEditTime: 2024-06-20 11:19:49
 */
modules.export = {
    modules: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            // Prefer `dart-sass`
                            implementation: require('sass'),
                            sassOptions: {
                                fiber: false,
                            },
                        },
                    },
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            // 引入多个全局sass文件
                            resources: [path.join(__dirname, './variables.scss'), path.join(__dirname, './mixins.scss')],
                        },
                    }
                ],
            },
        ]
    }
}