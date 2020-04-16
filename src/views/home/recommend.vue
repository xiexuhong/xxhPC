<template lang="pug">
  #recommend
    .title
        img(src="@/assets/image/recommend_title_left.png")
        span 多样化算力产品自由选择
        img(src="@/assets/image/recommend_title_right.png")
    .content
        .item
            .item_title 长期算力合约
            .text 3年长期有效,最小1T起 锁定期满自由转让/续约
            a-button.btn(type="primary") 立即下单
        .item
            .item_title 高波动算力合约
            .text 优异性价比，限定时间和投入内 快速提升算力产出最优选
            a-button.btn(type="primary") 立即下单
        .item
            .item_title 算力增值服务
            .text 算力收益套保服务，可自主设置盈亏 范围，获得额外保障性收益
            a-button.btn(type="primary") 立即下单
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
  padding: 75px 0 87px 0;
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 74px;
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
  .content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .item {
      background: #fff;
      max-width: 339px;
      box-sizing: border-box;
      padding: 69px 30px 41px;
      text-align: center;
      margin: 0 20px;
      position: relative;
      .item_title {
        font-size: 24px;
        color: rgb(2, 0, 0);
        margin-bottom: 27px;
      }
      .text {
        font-size: 16px;
        padding: 0 52px;
        color: rgba(137, 137, 137, 1);
        margin-bottom: 55px;
      }
      .btn {
        width: 100%;
      }
      .tag {
        position: absolute;
        top: 0;
        right: 0;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 12px;
        background: url('../../assets/image/recommend_item1.png');
      }
      .tag2 {
        background: url('../../assets/image/recommend_item2.png');
      }
      .tag3 {
        padding: 0 8px;
        background: url('../../assets/image/recommend_item3.png');
      }
    }
  }
  @media screen and (max-width: 768px) {
    padding: 20px;
    .title {
      margin-bottom: 20px;
      & > span {
        font-size: 18px;
      }
    }
    .content {
      .item {
        padding: 30px 30px 20px;
        margin-bottom: 10px;
        .item_title {
          font-size: 16px;
          margin-bottom: 20px;
        }
        .text {
          font-size: 14px;
          margin-bottom: 30px;
        }
      }
    }
  }
}
</style>
