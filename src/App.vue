<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { getCountry } from '@/script/api';
import { AppDeviceEnquire } from '@/mixins/deviceMixin';
import { mapGetters } from 'vuex';
export default {
  mixins: [AppDeviceEnquire],
  data() {
    return {};
  },
  created(){
  },
  computed: {
    ...mapGetters(['lang']),
  },
  watch: {
    lang(val) {
      this.init();
    },
  },
  methods: {
    async init() {
      // 获取国家json
      const res = (await getCountry(this.lang)).default;
      const country = res[0].countrys[0];
      this.$store.commit('changeCountry', country);
      // 如果有user信息初始化user
      const user = this.$ls.get('user');
      user && this.$store.commit('saveUser', user);
      // 获取首页数据
      this.$store.dispatch('requestHome');
    },
  },
  created() {
    this.init();
  },
};
</script>

<style lang="scss"></style>
