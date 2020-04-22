import Vue from 'vue';
import VueI18n from 'vue-i18n';
import store from '@/store';

Vue.use(VueI18n);

const DEFAULT_LANG = 'ZH-CN';
const LOCALE_KEY = 'localeLanguage';

const locales = {
  'ZH-CN': require('./ZH-CN.json'),
  'ZH-TW': require('./ZH-TW.json'),
  'EN-US': require('./EN-US.json'),
};

export const localesEumn = {
  'ZH-CN': '简体',
  'ZH-TW': '繁体',
  'EN-US': 'EN',
};

const i18n = new VueI18n({
  locale: DEFAULT_LANG,
  messages: locales,
});

export const setup = lang => {
  if (lang === undefined) {
    lang = Vue.ls.get(LOCALE_KEY);
    if (locales[lang] === undefined) {
      lang = DEFAULT_LANG;
    }
  }
  store.commit('changeLang', lang);
  Vue.ls.set(LOCALE_KEY, lang);
  Vue.config.lang = lang;
  i18n.locale = lang;
};

export default i18n;
