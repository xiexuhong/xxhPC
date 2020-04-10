<template>
  <a-layout id="usercenter">
    <UserCenter></UserCenter>
    <div class="content" :class="{mobileHeader: deviceType !== 'desktop'}">
      <a-layout-content>
       <router-view></router-view>
      </a-layout-content>
    </div>
  </a-layout>
</template>

<script>
import UserCenter from '@/components/userCenter';
import { mapGetters } from 'vuex';
export default {
  components: { UserCenter },
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
#usercenter {
  display: flex;
  flex-direction:row;
  max-width: 1200px;
  .content {
    background-color: #fff;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-left:10px;
    .ant-layout-content {
      width: 100%;
      box-sizing: border-box;
    }
  }
  .mobileHeader {
    width:100%;
    padding: 0;
    margin: 0;
  }
}

</style>
