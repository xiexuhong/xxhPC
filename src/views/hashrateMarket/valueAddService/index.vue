<template>
  <!-- 算力市场/增值服务首页 -->
  <div>
    <HashrateMarketHeader></HashrateMarketHeader>
    {{ msg }}
  </div>
</template>

<script>
import HashrateMarketHeader from '../../../components/hashrateMarketHeader';
export default {
  data() {
    return {
      msg: 'valueAddService',
    };
  },
  components: {
    HashrateMarketHeader,
  },
};
</script>

<style lang="scss" scoped></style>