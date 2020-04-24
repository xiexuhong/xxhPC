import { getMessageList, readAllMessage } from '@/script/api';

const state = {
  messageList: [],
  messageHeader: [],
  totalMessage: 0,
  unread_sum: 0,
};
const actions = {
  async requestMessageList({ commit }, data) {
    const { datas } = await getMessageList(data);
    if (data.curpage === 1) commit('saveMessageHeader', datas.list);
    commit('saveMessageList', datas);
  },
  async requestReadAllMessage({ commit }) {
    await readAllMessage();
    commit('allRead');
  },
};
const mutations = {
  saveMessageHeader(state, data) {
    state.messageHeader = data.slice(0, 6);
  },
  saveMessageList(state, data) {
    const { list, total_page, unread_sum } = data;
    state.totalMessage = total_page * 10;
    state.unread_sum = unread_sum;
    state.messageList = list;
  },
  allRead(state) {
    state.messageList = state.messageList.map(e => {
      e.if_unread = 0;
      return e;
    });
    state.messageHeader = state.messageHeader.map(e => {
      e.if_unread = 0;
      return e;
    });
    state.unread_sum = 0;
  },
};
const getters = {
  messageList: state => state.messageList,
  messageHeader: state => state.messageHeader,
  totalMessage: state => state.totalMessage,
  unread_sum: state => state.unread_sum,
};

export default {
  state,
  actions,
  mutations,
  getters,
};
