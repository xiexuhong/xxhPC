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
      const res = (await getCountry(this.lang)).default;
      const country = res[0].countrys[0];
      this.$store.commit('changeCountry', country);
    },
  },
  created() {
    this.init();
  },
};
</script>

<style lang="scss"></style>
