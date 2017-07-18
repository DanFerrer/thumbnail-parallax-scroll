module.exports = {
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       },
       {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader'
         ]
       },
       {
       	test: /\.js$/,
     		exclude: /(node_modules)/,
      	use: [
       		'babel-loader'
      	]
       },
       	test: /\.html$/,
			use: [
				'html'
			]
     ]
   }
};
