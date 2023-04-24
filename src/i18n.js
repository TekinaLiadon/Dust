import { createI18n } from "vue-i18n";

function loadLocaleMessages() {
    const locales = require.context(
        "./locales",
        true,
        /[A-Za-z0-9-_,\s]+\.json$/i
    );
    const messages = {};
    locales.keys().forEach((key) => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i);
        if (matched && matched.length > 1) {
            const locale = matched[1];
            messages[locale] = locales(key);
        }
    });
    return messages;
}

function pluralizeHelper(number) {
    let formatted = Number(String(number)[String(number).length - 1]);
    if (formatted > 2 && formatted < 5) formatted = 2;
    if (formatted >= 5) formatted = 0;
    if (
        Number(String(number).slice(-2)) > 10 &&
        Number(String(number).slice(-2)) < 20
    )
        formatted = 3;
    return formatted;
}

export function getBrowserLocale(options = {}) {
    const defaultOptions = { countryCodeOnly: false };
    const opt = { ...defaultOptions, ...options };
    const navigatorLocale =
        navigator.languages !== undefined
            ? navigator.languages[0]
            : navigator.language;
    if (!navigatorLocale) {
        return undefined;
    }
    return opt.countryCodeOnly
        ? navigatorLocale.trim().split(/[-_]/)[0]
        : navigatorLocale.trim();
}

export const i18n = createI18n({
    locale:
        getBrowserLocale({ countryCodeOnly: true }) === "ru"
            ? "en"
            : process.env.VUE_APP_I18N_FALLBACK_LOCALE,
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
    messages: loadLocaleMessages(),
    pluralizationRules: {
        ru: pluralizeHelper,
    },
});
