<template lang="pug">
  #recommend
    .title
        img(src="@/assets/image/recommend_title_left.png")
        span 平台荣誉
        img(src="@/assets/image/recommend_title_right.png")
    .contain
        .item
            .img
            .title RRMine/人人矿场全球CEO邹永成加入《福布斯商业委员会》
            .des 摘要：邹先生应邀在forbes.com上分享“打造去中心化算力基础设施，分享AI时代算力红利”专业意见。
        .item
            .img
            .title RRMine/人人矿场全球CEO邹永成加入《福布斯商业委员会》
            .des 摘要：邹先生应邀在forbes.com上分享“打造去中心化算力基础设施，分享AI时代算力红利”专业意见。
        .item
            .img
            .title RRMine/人人矿场全球CEO邹永成加入《福布斯商业委员会》
            .des 摘要：邹先生应邀在forbes.com上分享“打造去中心化算力基础设施，分享AI时代算力红利”专业意见。
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
  .contain {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .item {
      box-sizing: border-box;
      margin: 15px;
      width: 100%;
      max-width: 376px;
      min-height: 344px;
      padding: 20px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 27px 0px rgba(193, 192, 190, 0.26);
      .img {
        height: 40px;
        width: 150px;
        background: #333;
        margin-bottom: 40px;
      }
      .title {
        font-size: 18px;
        font-weight: bold;
        color: rgba(38, 38, 38, 1);
        padding-bottom: 40px;
        margin-bottom: 30px;
        position: relative;
        &::after {
          content: '';
          width: 37px;
          height: 3px;
          background: rgba(237, 173, 14, 1);
          position: absolute;
          left: 0;
          bottom: 0;
        }
      }
      .des {
        font-size: 14px;
        font-weight: 400;
        color: rgba(89, 89, 89, 1);
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
    .contain {
      .item {
        margin: 0;
        margin-bottom: 10px;
        min-height: 0;
        .img {
          margin-bottom: 20px;
        }
        .title {
          padding-bottom: 20px;
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
