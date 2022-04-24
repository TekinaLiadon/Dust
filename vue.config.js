module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: "@import '@/scss/settings.scss';",
            },
        },
    },
    devServer: {
        host: "local.y7jasha6g5cdsa.ru",
        disableHostCheck: true,
    },

    pluginOptions: {
        i18n: {
            fallbackLocale: "en",
            localeDir: undefined,
            enableLegacy: undefined,
            runtimeOnly: false,
            compositionOnly: false,
            fullInstall: true,
        },
    },
};
