<template>
  <a-popover placement="rightTop">
    <div slot="title">
      <p style="color:#595959;textAlign:center">总算力</p>
      <p
        style="color:#999999;textAlign:center"
        v-if="power.additionalPower || power.additional_power"
      >{{ mult(power.computingPower || power.computing_power) }}T = {{ mult(power.basePower || power.base_power) }} + {{ mult(power.additionalPower || power.additional_power) }}</p>
      <p
        v-else-if="power.computingPower || power.computing_power"
        style="color:#999999;textAlign:center"
      >{{ mult(power.computingPower || power.computing_power || 0, power.num) }}T</p>
    </div>
    <div slot="content">
      <ul class="hashratePopover">
        <li>
          <span>基础算力</span>
          <span>{{ mult(power.basePower || power.base_power || 0, num) }} T</span>
        </li>
        <li>
          <span>浮动算力</span>
          <span>{{ mult(power.floatPower || power.float_power || 0, num) }} T</span>
        </li>
        <li>
          <span>达标算力</span>
          <span>{{ mult(mult(power.pePower || power.pe_power || 0, num), rewardPower) }} T</span>
        </li>
        <li>
          <span>期货算力</span>
          <span>{{ mult(power.futuresPower || power.futures_power || 0, num) }} T</span>
        </li>
        <li>
          <span>定期算力</span>
          <span>{{ mult(power.regularPower || power.regular_power || 0, num) }} T</span>
        </li>
        <li v-if="(power.inviterPower || power.inviter_power) > 0">
          <span>邀请算力</span>
          <span>{{ mult(power.inviterPower || power.inviter_power, num) }}T</span>
        </li>
        <li v-if="(power.tdPower || power.td_power) > 0">
          <span>成长算力</span>
          <span>{{ mult(power.tdPower || power.td_power, num) }}T</span>
        </li>
        <li v-if="(power.couponPower || power.coupon_power) > 0">
          <span>优惠券算力</span>
          <span>{{ mult(power.couponPower || power.coupon_power, num) }}T</span>
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