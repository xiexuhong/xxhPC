<template lang="pug">
  #honor
    .title
        img(src="@/assets/image/recommend_title_left.png")
        span 荣誉
        img(src="@/assets/image/recommend_title_right.png")
    .list
        .item(v-for="_ in 3" :key="_")
            .icon
            .content
                .img
                .article
                    .itemTitle RRMINE福布斯刊文：打造去中心化算力基础设施，分享AI时代算力红利
                    .text Having led a Bitcoin mining firm for over two years, I've come to realize the importance of computing power. Computing power connects the real (chip energy) and virtual (algorithm) dimensions of our world. Under the condition that the ownership of the assets remains unchanged, computing power is an intangible asset that can be used and circulated. It is a commercialized technical service and a consumption investment. This is a remarkable innovation for mankind, and it is an upgrade for the digital economy. 2020 marks the birth year of the computing power infrastructure.
    a.btn 查看更多资讯
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
#honor {
  background: rgba(249, 249, 250, 1);
  padding: 76px 0 80px;
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 48px;
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
  .list {
    max-width: 1200px;
    margin: 0 auto;
    .item {
      background: #fff;
      padding: 30px;
      margin-bottom: 30px;
      .icon {
        width: 93px;
        height: 31px;
        background: #000;
        margin-bottom: 10px;
      }
      .content {
        display: flex;
        .img {
          width: 100%;
          max-width: 240px;
          height: 158px;
          background: #ccc;
          margin-right: 25px;
        }
        .article {
          .itemTitle {
            font-size: 20px;
            font-weight: 500;
            color: rgba(38, 38, 38, 1);
          }
          .text {
            font-size: 14px;
            font-weight: 400;
            color: rgba(137, 137, 137, 1);
            line-height: 24px;
          }
        }
      }
    }
  }
  .btn {
    display: block;
    width: 273px;
    height: 49px;
    line-height: 49px;
    text-align: center;
    border: 1px solid rgba(255, 156, 14, 1);
    border-radius: 25px;
    margin: 0 auto;
    color: rgba(255, 156, 14, 1);
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    padding: 20px;
    .title {
      margin-bottom: 20px;
      & > span {
        font-size: 18px;
      }
    }
    .list {
      .item {
        padding: 20px;
        margin-bottom: 10px;
        .content {
          flex-direction: column;
          .img {
            width: 100%;
            max-width: 100%;
            height: 158px;
            background: #ccc;
            margin-right: 25px;
          }
          .article {
            .itemTitle {
              font-size: 18px;
            }
            .text {
            }
          }
        }
      }
    }
  }
}
</style>
