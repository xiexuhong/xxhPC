<template lang="pug">
  a-layout(id="root")
    a-layout-header(:class="{ mobileHeader: deviceType !== 'desktop',}")
      Header
    .content
      a-layout-content
        router-view
    a-layout-footer
      Footer(v-if="deviceType==='desktop'")
      MobileFooter(v-else)
</template>

<script>
import Header from '@/components/header';
import Footer from '@/components/footer';
import MobileFooter from '@/components/footer/mobile_footer';
import { mapGetters } from 'vuex';
export default {
  components: { Header, Footer, MobileFooter },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['deviceType']),
  },
  methods: {},
  created() {},
  beforeDestroy() {},
};
</script>

<style lang="scss" scoped>
#root {
  position: relative;
  .mobileHeader {
    padding: 0 20px;
  }
  .ant-layout-header {
    background: rgba(32, 40, 51, 1);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
  }
  .content {
    display: flex;
    justify-content: center;
    padding-top: 64px;
    .ant-layout-content {
      width: 100%;
      box-sizing: border-box;
    }
  }
  .ant-layout-footer {
    background: #202833;
    padding: 0;
  }
}
</style>
