<template lang="pug">
  #banner
    a-carousel(autoplay)
        .item
            .contain
                .title 构筑全球算力基础设施
                .des 实现算力资产自由流动
                .btn
                    a.confirm 立即体验
                    a.more 了解更多
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
#banner {
  .item {
    height: 710px;
    background-image: url('../../assets/image/banner.png');
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    .contain {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .title {
        font-size: 50px;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        margin-bottom: 30px;
      }
      .des {
        font-size: 40px;
        font-weight: 300;
        color: rgba(255, 255, 255, 1);
        opacity: 0.63;
        margin-bottom: 52px;
      }
      .btn {
        font-size: 16px;
        line-height: 50px;
        font-weight: 400;
        display: flex;
        & > a {
          width: 221px;
          height: 50px;
          display: block;
          text-align: center;
          border-radius: 2px;
          color: rgba(255, 255, 255, 1);
        }
        .confirm {
          background: linear-gradient(-90deg, rgba(255, 141, 19, 1), rgba(246, 183, 46, 1));
          margin-right: 30px;
        }
        .more {
          border: 1px solid rgba(255, 255, 255, 1);
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .item {
      height: 260px;
      .contain {
        .title {
          font-size: 24px;
          margin-bottom: 10px;
        }
        .des {
          font-size: 22px;
          margin-bottom: 20px;
        }
        .btn {
          & > a {
            width: 100px;
            height: 30px;
            line-height: 30px;
            font-size: 12px;
          }
          .confirm {
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>
