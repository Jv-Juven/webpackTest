var Webpack = require("webpack");
// var Dashboard = require('webpack-dashboard');
// var DashboardPlugin = require('webpack-dashboard/plugin');
// var dashboard = new Dashboard();
var path = require("path");
var projectRoot = "../";
// var projectRoot = path.resolve(__dirname, "../");
console.log(projectRoot, path.resolve(__dirname, "../"));
module.exports = {
	/**
	 * entry的设置：
	 * 1、可以为字符串，可以为字符串数组,
	 * 2、可以为对象：(如下所示)在output 中设置[name]表示entry中输入文件对应的健名
	 */
	entry: {
		// common: "./src/entry.js",
		dev: [
			path.resolve(__dirname, "src/views/main.js"),
			"webpack/hot/dev-server", // 热价在文件配置
		],
		// coffee: "./src/coffee/test.coffee",
	},
	entry: path.resolve(__dirname, "../src/views/main.js"),
	output: {
		path: "/dist", // 编译后的输出的文件目录
		publicPath: "/dist", // 为html文件中定义资源的访问根目录
		filename: "[name].js", // 输出的文件名，入口entry的每个属性名对应着[name]，即有多少个属性就有多少个后缀名为.bundle.js的文件
		chunkFilename: "[id].bundle.js?v=[hash]",
	},
	resolve: {
		extensions: ['', '.js', '.vue', '.less'],
		fallback: [path.join(__dirname, 'node_modules')],
		alias: {
			'src': path.resolve(__dirname, '../src'),
			'assets': path.resolve(__dirname, '../src/assets'),
			'components': path.resolve(__dirname, '../src/views/components'),
			'pages': path.resolve(__dirname, '../src/views/pages'),
		}
	},
	module: {
		loaders: [{
			test: /\.css$/,
			loader: "style!css",
			// 加上路径
			include: projectRoot,
	        exclude: /node_modules/
		},
		{
			test: /\.vue$/,
			loader: "vue!less",
			include: projectRoot,
	        exclude: /node_modules/
		},
		// {
		// 	test: /\.coffee$/,
		// 	loader: "coffee-loader",
		// 	include: projectRoot,
	    //     exclude: /node_modules/
		// },
		{
	        // edit this for additional asset file types
	        test: /\.(png|jpg|gif)$/,
	        loader: 'url',
	        query: {
	        	// inline files smaller then 10kb as base64 dataURL
	        	limit: 10000,
	        	// fallback to file-loader with this naming scheme
	        	name: '[name].[ext]?[hash]'
			},
			include: projectRoot,
        	exclude: /node_modules/
        },
		// 转化ES6的语法
        {
			test: /\.js$/,
			loader: 'babel',
			include: projectRoot,
			exclude: /node_modules/
		}],
	},
	// 转化成es5的语法
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
	// .vue的配置。需要单独出来配置，其实没什么必要--因为我删了也没保错，不过这里就留这把，因为官网文档里是可以有单独的配置的。
    vue: {
        loaders: {
            css: 'style!css!autoprefixer',
        }
    },
	// 服务器配置相关，自动刷新!
    devServer: {
        historyApiFallback: true,
        hot: false,
        inline: true,
        grogress: true,
		// quiet: true, // lets WebpackDashboard do its thing
    },
	// 开启source-map，webpack有多种source-map，在官网文档可以查到
    devtool: 'eval-source-map',

	plugins: [
		new Webpack.BannerPlugin("这里是打包文件头部注释*****+++++++------"),
		// new Webpack.HotModuleReplacementPlugin(), // 模块热替换
		// new DashboardPlugin(dashboard.setData),
	],
}

/**
 * webpack #最基本的启动webpack命令
 * webpack -w #提供watch方法，实时进行打包更新，等同于 webpack --watch 但仅仅是检测到webpack的管理到的文件改动，且仅仅是编译，没有刷新浏览器
 * webpack -p #对打包后的文件进行压缩
 * webpack -d #提供SourceMaps，方便调试
 * webpack --colors #输出结果带彩色，比如：会用红色显示耗时较长的步骤
 * webpack --profile #输出性能数据，可以看到每一步的耗时
 * webpack --display-modules #默认情况下 node_modules 下的模块会被隐藏，加上这个参数可以显示这些被隐藏的模块
 */

/**
 * 参考的配置
 * http://guowenfh.github.io/2016/03/25/vue-webpack-05-vue/
 */
