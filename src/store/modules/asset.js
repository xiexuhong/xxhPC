// 算力市场共享数据
const state = {
  currencylist:['CNY','USD','other'],
  defaultcurrency:"USD"
};
const mutations = {};
const actions = {};
const getters = {
  currencylist: state => state.currencylist,
  defaultcurrency: state =>state.defaultcurrency,
};

export default {
  state,
  actions,
  mutations,
  getters,
};
