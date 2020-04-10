import Vue from 'vue';
import VueI18n from 'vue-i18n';
import store from '@/store';

Vue.use(VueI18n);

const DEFAULT_LANG = 'zh_cn';
const LOCALE_KEY = 'localeLanguage';

const locales = {
  zh_cn: require('./zh_cn.json'),
  zh_tw: require('./zh_tw.json'),
  en_us: require('./en_us.json'),
};

export const localesEumn = {
  zh_cn: '简体',
  zh_tw: '繁体',
  en_us: 'EN',
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
