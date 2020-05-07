
import { getAssetList,ownCurrency,changeCurrency } from '@/script/api';

const state = {
  currency_list:[],
  defaultcurrency:"",
  available:"",
  asset_list:[],
  coin_list:[],
  balance_list:[],
  total:{},
  payment_list:[],
  currency_limit:[],
  currency:"",
  coin:"",
  limit:""
};
const mutations = {};
const actions = {};
const getters = {
  payment_list: state=>state.payment_list,
  currency_limit: state=>state.currency_limit,
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
    for(let item of state.payment_list){
      if(item.currency == state.currency){
          return item.money_avail;
      }
    }
  },
  isSupport:state=>{
    for(let item of state.payment_list){
      if(item.currency == state.currency){
          return item.is_support;
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
