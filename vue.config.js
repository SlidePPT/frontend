module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  outputDir: "docs",
  pwa: {
  name: "club.",
  themeColor: "#36AFFF",
  workboxPluginMode: "InjectManifest",
  workboxOptions: {
    swSrc: "public/service-worker.js"
  }
},
publicPath: process.env.NODE_ENV === "production" ? "/S_vue_pwa/" : "/",
  devServer:{
      https: true
  }
}