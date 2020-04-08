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
  },
  mutations: {
    saveUser(state, data) {
      state.user = data;
    },
    changeDeviceType(state, type) {
      state.deviceType = type;
    },
  },
  actions: {},
  getters: {
    deviceType: state => state.deviceType,
  },
  modules: modules,
});
