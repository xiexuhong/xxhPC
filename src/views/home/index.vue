<template lang="pug">
  #home
    Banner
    Recommend
    BusinessMode
    ChainData
    Advantage
    Evaluation
    Honor
</template>

<script>
import Recommend from './recommend';
import ChainData from './chain_data';
import Evaluation from './evaluation';
import Honor from './honor';
import Banner from './banner';
import Advantage from './advantage';
import BusinessMode from './businessMode';
import { mapGetters } from 'vuex';
export default {
  components: { Recommend, ChainData, Evaluation, Honor, Banner, Advantage, BusinessMode },
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
