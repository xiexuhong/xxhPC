<template>
  <a-popover placement="rightTop">
    <div slot="title">
      <p style="color:#595959;textAlign:center">总算力</p>
      <p
        style="color:#999999;textAlign:center"
        v-if="power.additionalPower"
      >{{ mult(power.computingPower) }}T = {{ mult(power.basePower) }} + {{ mult(power.additionalPower) }}</p>
      <p
        v-else-if="power.computingPower"
        style="color:#999999;textAlign:center"
      >{{ mult(power.computingPower, power.num) }}T</p>
    </div>
    <div slot="content">
      <ul class="hashratePopover">
        <li v-if="power.basePower > 0">
          <span>基础算力</span>
          <span>{{ mult(power.basePower, num) }} T</span>
        </li>
        <li v-if="power.floatPower > 0">
          <span>浮动算力</span>
          <span>{{ mult(power.floatPower, num) }} T</span>
        </li>
        <li v-if="power.pePower > 0">
          <span>达标算力</span>
          <span>{{ mult(mult(power.pePower, num), rewardPower) }} T</span>
        </li>
        <li v-if="power.futuresPower > 0">
          <span>期货算力</span>
          <span>{{ mult(power.futuresPower, num) }} T</span>
        </li>
        <li v-if="power.regularPower > 0">
          <span>定期算力</span>
          <span>{{ mult(power.regularPower, num) }} T</span>
        </li>
        <li v-if="power.inviterPower > 0">
          <span>邀请算力</span>
          <span>{{ mult(power.inviterPower, num) }}T</span>
        </li>
        <li v-if="power.tdPower > 0">
          <span>成长算力</span>
          <span>{{ mult(power.tdPower, num) }}T</span>
        </li>
        <li v-if="power.couponPower > 0">
          <span>优惠券算力</span>
          <span>{{ mult(power.couponPower, num) }}T</span>
        </li>
      </ul>
    </div>
    <slot></slot>
  </a-popover>
</template>

<script>
import { mult } from '@/script/utils';
export default {
  props: {
    power: {
      //   required: true,
    },
    num: {
      default: 1,
    },
    rewardPower: {
      default: 1,
    },
  },
  created() {
    // console.log(this.power);
  },
  computed: {
    mult: () => mult,
  },
};
</script>

<style lang="scss" scoped>
.ant-popover-inner {
  .ant-popover-inner-content {
    .hashratePopover {
      li {
        width: 130px;
        display: flex;
        justify-content: space-between;
        span {
          display: inline-block;
          width: 45%;
        }
      }
    }
  }
}
</style>