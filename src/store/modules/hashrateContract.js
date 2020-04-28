const type = {
  GET_ORDER_ID: 'GET_ORDER_ID', //  获取单条商城数据订单ID
  //   GET_SINGLE_SERVICE: 'GET_SINGLE_SERVICE', //  获取单条增值服务数据
};
// 算力市场共享数据
const state = {
  orderId: JSON.parse(sessionStorage.getItem('orderId')) || '', //接收算力商城或增值服务中查看详情/立即购买推进来的单条信息
};
const mutations = {
  //  获取单条数据
  [type.GET_ORDER_ID](state, newOrderId) {
    sessionStorage.setItem('orderId', JSON.stringify(newOrderId)); //  解决vuex刷新页面state丢失问题
    state.orderId = newOrderId;
  },
  //   [type.GET_SINGLE_INSURANCE](state, newStateList) {
  //     sessionStorage.setItem('singleInsurance', JSON.stringify(newStateList)); //  解决vuex刷新页面state丢失问题
  //     state.singleList = newStateList;
  //   },
};
const actions = {};
const getters = {
  orderId: state => state.orderId,
  //   singleInsurance: state => state.singleInsurance,
};

export default {
  state,
  actions,
  mutations,
  getters,
};
