import { getHome } from '@/script/api';

const state = {
  adv_list: [],
  article_list: [],
  coin_data: [],
  recommend: [],
  setting_list: [],
  support_list: [],
  unread_info: {},
};
const actions = {
  async requestHome({ commit }, data) {
    const { datas } = await getHome();
    commit('saveHomeData', datas);
  },
};
const mutations = {
  saveHomeData(state, data) {
    const {
      adv_list,
      article_list,
      coin_data,
      recommend,
      setting_list,
      support_list,
      unread_info,
    } = data;
    state.adv_list = adv_list;
    state.article_list = article_list;
    state.coin_data = coin_data;
    state.recommend = recommend;
    state.setting_list = setting_list;
    state.support_list = support_list;
    state.unread_info = unread_info;
  },
};
const getters = {
  adv_list: state => state.adv_list,
  article_list: state => state.article_list,
  coin_data: state => state.coin_data,
  recommend: state => state.recommend,
  setting_list: state => state.setting_list,
  support_list: state => state.support_list,
  unread_info: state => state.unread_info,
};

export default {
  state,
  actions,
  mutations,
  getters,
};
