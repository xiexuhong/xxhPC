<template lang="pug">
  #recommend
    .title
        img(src="@/assets/image/recommend_title_left.png")
        span 链上数据
        img(src="@/assets/image/recommend_title_right.png")
    .des 去中心化可信算力资产管理
    .tips
        span 安全运营
        span.big 3年
        span ,服务百万用户
    .records
        .item
            .top
                img(src="@/assets/image/record1.png")
                span 分币记录
            .bottom
                .line
                    span 今日分币
                    span 0.00100231 BTC
                .line
                    span 累计分币
                    span 0.00100231 BTC
        .item
            .top
                img(src="@/assets/image/record2.png")
                span 交易记录
            .bottom
                .line
                    span 今日交易
                    span 0.00100231 BTC
                .line
                    span 累计交易
                    span 0.00100231 BTC
        .item
            .top
                img(src="@/assets/image/record3.png")
                span 产出记录
            .bottom
                .line
                    span 今日产出
                    span 0.00100231 BTC
                .line
                    span 累计产出
                    span 0.00100231 BTC
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
  .des {
    font-size: 18px;
    font-weight: 400;
    color: rgba(137, 137, 137, 1);
    text-align: center;
    margin-bottom: 48px;
  }
  .tips {
    text-align: center;
    font-size: 28px;
    font-weight: 500;
    color: rgba(255, 164, 65, 1);
    margin-bottom: 61px;
    & > .big {
      font-size: 36px;
    }
  }
  .records {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .item {
      background: #fff;
      box-sizing: border-box;
      width: 100%;
      max-width: 388px;
      padding: 21px 17px;
      margin: 0 8px;
      .top {
        display: flex;
        align-items: center;
        margin-bottom: 33px;
        & > img {
          display: block;
        }
        & > span {
          margin-left: 9px;
          font-size: 18px;
          font-weight: 400;
          color: rgba(38, 38, 38, 1);
        }
      }
      .bottom {
        .line {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 16px;
          font-weight: 400;
          color: rgba(137, 137, 137, 1);
          margin-bottom: 16px;
        }
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
    .des {
      font-size: 16px;
      margin-bottom: 10px;
    }
    .tips {
      font-size: 16px;
      margin-bottom: 20px;
      & > .big {
        font-size: 18px;
      }
    }
    .records {
      .item {
        margin-bottom: 10px;
        .top {
          & > span {
            font-size: 16px;
          }
        }
        .bottom {
          .line {
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
