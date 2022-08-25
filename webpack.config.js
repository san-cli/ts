const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
   entry: path.resolve(__dirname, "./src/main.ts"),
   resolve: {
      extensions: [".ts", ".js"], // 按顺序解析
   },
   module: {
      rules: [
         {
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            use: [
               {
                  loader: "babel-loader",
               },
            ],
         },
         {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
         },
         {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: "asset/resource",
         },
      ],
   },
   output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "bundle.js",
   },
   mode: "development",
   devtool: "cheap-module-source-map",
   plugins: [
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, "./public/index.html"),
      }),
   ],
}
