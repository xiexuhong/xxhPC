<template lang="pug">
  #about
    .banner
        .title 构筑全球算力基础设施
        .des 实现算力资产自由流动
    a-tabs(defaultActiveKey="1" @change="changeTab")
        a-tab-pane(tab="RRMine平台" key="1")
            Platform
        a-tab-pane(tab="平台优势" key="2")
            Advantage
        a-tab-pane(tab="发展历程" key="3")
            History
        a-tab-pane(tab="平台荣誉" key="4")
            Honor
</template>

<script>
import Platform from './platform';
import Advantage from './advantage';
import History from './history';
import Honor from './honor';
import { mapGetters } from 'vuex';
export default {
  components: { Platform, Advantage, History, Honor },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['deviceType']),
  },
  methods: {
    changeTab(val) {
      console.log(val);
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
#about {
  .banner {
    height: 360px;
    background-image: url('../../assets/image/aboutBanner.png');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title {
      font-size: 48px;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      margin-bottom: 30px;
    }
    .des {
      font-size: 24px;
      font-weight: 300;
      color: rgba(255, 255, 255, 1);
    }
  }

  @media screen and (max-width: 768px) {
    .banner {
      height: 240px;
      .title {
        font-size: 20px;
        margin-bottom: 10px;
      }
      .des {
        font-size: 18px;
      }
    }
  }
}
</style>
