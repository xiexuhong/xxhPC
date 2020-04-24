<template>
  <a-layout id="usercenter">
    <UserCenter></UserCenter>
    <div class="content" :class="{ mobileHeader: deviceType !== 'desktop' }">
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
    // console.log(this.$store.state.user);
  },
};
</script>

<style lang="scss" scoped>
#usercenter {
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  margin: 15px auto;
  .content {
    background-color: #fff;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-left: 10px;
    padding: 10px;
    .ant-layout-content {
      width: 100%;
      box-sizing: border-box;
    }
    .ant-input {
      max-width: 160px;
      margin-right: 15px;
    }
  }
  .mobileHeader {
    width: 100%;
    padding: 0;
    margin: 0;
  }
  .fontcolor {
    color: #ffab32;
  }
  .ant-form-item {
    margin-bottom: 12px;
  }
  .ant-radio-button-wrapper {
    background-color: #f8f8f8;
    margin-right: 10px;
    border-radius: 5px;
    color: #000;
  }
  .button_area {
    display: flex;
    button {
      margin-right: 15px;
    }
  }
  .ant-list-item {
    padding: 6px 0;
  }
}
</style>
