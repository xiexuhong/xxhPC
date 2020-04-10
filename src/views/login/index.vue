<template lang="pug">
  #user(:class="{mobileUserLayout: deviceType==='mobile'}")
    router-view
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['deviceType']),
  },
  methods: {},
  created() {},
};
</script>

<style lang="scss" scoped>
#user {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 350px);
  padding: 10px;
}
.mobileUserLayout {
  height: calc(100vh - 147px) !important;
}
</style>
