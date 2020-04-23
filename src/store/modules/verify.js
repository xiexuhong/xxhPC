const state = {
  verifyStatus: false,
};
const actions = {};
const mutations = {
  hasVerified(state) {
    state.verifyStatus = true;
  },
};
const getters = {
  verifyStatus: state => state.verifyStatus,
};

export default {
  state,
  actions,
  mutations,
  getters,
};
