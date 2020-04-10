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
}
@media screen and (max-width: 768px) {
}
</style>
