module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: "@import '@/scss/settings.scss';",
            },
        },
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
