<template lang="pug">
  a-layout(id="root")
    a-layout-header(:class="{ mobileHeader: deviceType !== 'desktop' }")
      Header
    .content
      a-layout-content
        router-view
    //- a-layout-footer footer{{ deviceType }}
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
      box-sizing: border-box;
      padding: 10px;
    }
  }
}
</style>
