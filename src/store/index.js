import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const modules = {};
const files = require.context('./modules', false, /\.js$/);
files.keys().forEach(key => {
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default;
});

export default new Vuex.Store({
  state: {
    user: {},
    deviceType: 'desktop',
    country: {},
    lang: 'zh_cn',
  },
  mutations: {
    saveUser(state, data) {
      Vue.ls.set('user', data);
      state.user = data;
    },
    changeDeviceType(state, type) {
      state.deviceType = type;
    },
    changeCountry(state, country) {
      state.country = country;
    },
    changeLang(state, lang) {
      state.lang = lang;
    },
  },
  actions: {},
  getters: {
    deviceType: state => state.deviceType,
    country: state => state.country,
    lang: state => state.lang,
  },
  modules: modules,
});
