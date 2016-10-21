var webpack = require('webpack');

module.exports = {
    entry: {
        blog: './entry/blog.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: './bundle'
    },

    module: //加载器配置
    {
        loaders: [
            { test: /\.css?$/, loader: 'style!css' },
            { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=50000&name=[path][name].[ext]'},
            {
                "test": /\.js?$/,
                "exclude": /node_modules/,
                "loader": "babel",
                "query": {
                    "presets": [
                        "es2015",
                        "stage-0"
                    ]
                }
            },
            { test: /\.vue?$/, loader: "vue" }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    },
    devtool: 'source-map'
};