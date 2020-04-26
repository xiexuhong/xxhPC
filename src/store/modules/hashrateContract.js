const type = {
  GET_SINGLE_CONTRACT: 'GET_SINGLE_CONTRACT', //  获取单条商城数据
  //   GET_SINGLE_SERVICE: 'GET_SINGLE_SERVICE', //  获取单条增值服务数据
};
// 算力市场共享数据
const state = {
  singleContract: JSON.parse(sessionStorage.getItem('singleContract')) || '', //接收算力商城或增值服务中查看详情/立即购买推进来的单条信息
};
const mutations = {
  //  获取单条数据
  [type.GET_SINGLE_CONTRACT](state, newStateContract) {
    sessionStorage.setItem('singleContract', JSON.stringify(newStateContract)); //  解决vuex刷新页面state丢失问题
    state.singleContract = newStateContract;
  },
  //   [type.GET_SINGLE_INSURANCE](state, newStateList) {
  //     sessionStorage.setItem('singleInsurance', JSON.stringify(newStateList)); //  解决vuex刷新页面state丢失问题
  //     state.singleList = newStateList;
  //   },
};
const actions = {};
const getters = {
  singleContract: state => state.singleContract,
  //   singleInsurance: state => state.singleInsurance,
};

export default {
  state,
  actions,
  mutations,
  getters,
};
