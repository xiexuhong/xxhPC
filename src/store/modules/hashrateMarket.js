const type = {
  GET_SINGLE_LIST: 'GET_SINGLE_LIST', //  获取单条商城数据
  GET_SINGLE_INSURANCE: 'GET_SINGLE_INSURANCE', //  获取单条增值服务数据
};
// 算力市场共享数据
const state = {
  singleList: JSON.parse(sessionStorage.getItem('singleList')) || '', //接收算力商城或增值服务中查看详情/立即购买推进来的单条信息
};
const mutations = {
  //  获取单条数据
  [type.GET_SINGLE_LIST](state, newStateList) {
    sessionStorage.setItem('singleList', JSON.stringify(newStateList)); //  解决vuex刷新页面state丢失问题
    state.singleList = newStateList;
  },
  [type.GET_SINGLE_INSURANCE](state, newStateList) {
    sessionStorage.setItem('singleInsurance', JSON.stringify(newStateList)); //  解决vuex刷新页面state丢失问题
    state.singleList = newStateList;
  },
};
const actions = {};
const getters = {
  singleList: state => state.singleList,
  singleInsurance: state => state.singleInsurance,
};

export default {
  state,
  actions,
  mutations,
  getters,
};
