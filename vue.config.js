  
module.exports = {
    outputDir: "docs",
    pwa: {
		name: "club.",
		themeColor: "#36AFFF",
		workboxPluginMode: "InjectManifest",
		workboxOptions: {
			swSrc: "public/service-worker.js"
		}
	},
	publicPath: process.env.NODE_ENV === "production" ? "/frontend/" : "/",
    devServer:{
        https: true
    }
}