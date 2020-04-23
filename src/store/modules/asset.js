
const state = {
  assetMess:'',
  currency_list:[],
  defaultcurrency:"",
  asset_list:[],
  coin_list:[],
  balance_list:[],
  total:{}
};
const mutations = {};
const actions = {};
const getters = {
  currency_list: state =>state.currency_list,
  defaultcurrency: state =>state.defaultcurrency,
  coin_list: state =>state.coin_list,
  balance_list: state =>state.balance_list,
  total:state =>state.total,
  asset_list: state => [...state.coin_list,...state.balance_list],
};

export default {
  state,
  actions,
  mutations,
  getters,
};
