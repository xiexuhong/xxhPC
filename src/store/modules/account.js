// 账户共享数据
const state = {
  BHPayInfo: {
    isRelated: false,
    account: "",
    bhpay_account: "",
    true_name: "",
    nick_name: "",
    BHPay_date: "",
    bhpay_quick_payment: "",
  },
};
const mutations = {};
const actions = {};
const getters = {
  BHPayInfo: state => state.BHPayInfo,
};

export default {
  state,
  actions,
  mutations,
  getters,
};
