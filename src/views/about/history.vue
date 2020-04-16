<template lang="pug">
  #recommend
    .title
        img(src="@/assets/image/recommend_title_left.png")
        span 人人矿场发展历程
        img(src="@/assets/image/recommend_title_right.png")
    .tabs
        .tab 公司发展路线
        .tab(class="active") 技术发展路线
    .timeline
        a-timeline
            a-timeline-item 2019年11月 推出全球首个跨链算力清算和交割系统-RRP平台
            a-timeline-item 2019年06月 推出全球首个去中心化算力管理和交易系统-RRMine
            a-timeline-item 2018年02月 参加了全球计算机网络基础设施的建设，启动首个全球算力公链-BHP(排名全球公链前100名)
            a-timeline-item 2017年08月 推出首个全覆盖长期算力合同产品
            a-timeline-item 2017年初 探索“合同电力账单”的业务模型并启动相关区块链技术的研发
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['deviceType']),
  },
  created() {},
};
</script>

<style lang="scss" scoped>
#recommend {
  background: rgba(249, 249, 250, 1);
  padding: 76px 0 80px;
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 26px;
    & > img {
      display: block;
    }
    & > span {
      margin: 0 25px;
      font-size: 36px;
      font-weight: 500;
      color: rgba(38, 38, 38, 1);
    }
  }
  .tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 60px;
    .tab {
      cursor: pointer;
      margin: 10px;
      box-sizing: border-box;
      text-align: center;
      width: 241px;
      height: 51px;
      line-height: 51px;
      border: 1px solid rgba(176, 175, 174, 1);
      font-size: 18px;
      font-weight: 500;
      color: rgba(153, 153, 153, 1);
    }
    .active {
      background: rgba(255, 171, 50, 1);
      color: #fff;
      border: none;
    }
  }
  .timeline {
    display: flex;
    justify-content: center;
  }
  @media screen and (max-width: 768px) {
    padding: 20px;
    .title {
      margin-bottom: 20px;
      & > span {
        font-size: 18px;
      }
    }
  }
}
</style>
