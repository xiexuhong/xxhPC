<template lang="pug">
  #home
    ChainData
</template>

<script>
import Recommend from './recommend';
import ChainData from './chain_data';
import { mapGetters } from 'vuex';
export default {
  components: { Recommend, ChainData },
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
#home {
}
</style>
