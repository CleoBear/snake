// import a package
const path = require('path');

// webpack configuration
module.exports = {
    
    mode: 'development',
    
    // 指定入口
    entry:"./src/index.ts",

    // 指定打包文件所在的目錄
    output:{

        // 指定打包文件目錄
        path: path.resolve(__dirname, 'dist'),
        
        // 打包後的文件
        filename : "bundle.js"
    },

    // 指定webpack 打包時使用的模組
    module: {
        //指定加載的規則
        rules: [
            {
                // 指定規則生效的文件
                test: /\.ts$/,

                // 使用ts-loader處理以.ts結尾的文件
                use: 'ts-loader',

                //要排除的文件
                exclude: /node_modules/
            }
        ]
    }

}
