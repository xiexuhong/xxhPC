<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { AppDeviceEnquire } from '@/mixins/deviceMixin';
export default {
  mixins: [AppDeviceEnquire],
  data() {
    return {};
  },
};
</script>

<style lang="scss"></style>
