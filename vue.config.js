module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/assets/_theme.scss";`
            }
        }
    },
    publicPath: process.env.NODE_ENV === "production" ? "/binance-us-assignment/" : "/",
}