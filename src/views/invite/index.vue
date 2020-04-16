<template lang="pug">
  #invite 1
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['deviceType']),
  },
  created() {},
};
</script>

<style lang="scss" scoped>
#invite {
  @media screen and (max-width: 768px) {
  }
}
</style>
