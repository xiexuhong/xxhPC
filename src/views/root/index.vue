<template>
  <a-layout id="root">
    <a-layout-header :class="{mobileHeader: deviceType !== 'desktop'}">
      <Header></Header>
    </a-layout-header>
    <div class="content">
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
    </div>
    <a-layout-footer>footer{{deviceType}}</a-layout-footer>
  </a-layout>
</template>

<script>
import Header from '@/components/header';
import { mapGetters } from 'vuex';
export default {
  components: { Header },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['deviceType']),
  },
  created() {
    console.log(this.$store.state.user);
  },
};
</script>

<style lang="scss">
#root {
  .mobileHeader {
    padding: 0 20px;
  }
  .content {
    display: flex;
    justify-content: center;
    .ant-layout-content {
      width: 100%;
      max-width: 1200px;
      box-sizing: border-box;
      padding: 10px;
    }
  }
}
</style>
