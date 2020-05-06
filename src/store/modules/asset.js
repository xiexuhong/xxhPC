
import { getAssetList,ownCurrency,changeCurrency } from '@/script/api';

const state = {
  currency_list:[],
  defaultcurrency:"",
  available:"",
  asset_list:[],
  coin_list:[],
  balance_list:[],
  total:{},
  paymentlist:[],
  currency:"",
  coin:""
};
const mutations = {};
const actions = {};
const getters = {
  currency_list: state =>state.currency_list,
  defaultcurrency: state =>state.defaultcurrency,
  currency: state =>{
    if(state.currency){
      return state.currency;
    }
    else{
      return state.defaultcurrency;
    } 
  },
  coin: state =>{
    if(state.coin){
      return state.coin;
    }
    else{
      return state.coin_list[0].coin;
    }
  },
  available:state=>{
    for(let item of state.balance_list){
      if(item.coin == state.currency){
          return item.available;
      }
    }
  },
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
