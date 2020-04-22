
const state = {
  assetMess:'',
  currency_list:['CNY','USD','other'],
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
  total:function(state){
    if(!state.assetMess.hasOwnProperty('balance')){
      return
    }
    var total ={};
    total.asset_total = state.assetMess.asset.asset_total;
    total.balance_total = state.assetMess.balance.balance_total;
    total.deposit = state.assetMess.deposit.valuation;
    total.total = state.assetMess.total;
    return state.total = total;
  },
  asset_list: state => [...state.coin_list,...state.balance_list],
};

export default {
  state,
  actions,
  mutations,
  getters,
};
