<template lang="pug">
  #countrySelect
    span.show(@click="countrySelect('/country')") {{country.number}}
    a-modal(v-model="visbile" :footer="null" :closable="false" wrapClassName="countryWrap")
      Country(@close="visbile=false")
</template>

<script>
import { mapGetters } from 'vuex';
import Country from './country';
export default {
  components: { Country },
  data() {
    return {
      visbile: false,
    };
  },
  computed: {
    ...mapGetters(['country', 'deviceType']),
  },
  methods: {
    countrySelect(path) {
      if (this.deviceType === 'mobile') {
        this.$router.push(path);
        return;
      }
      this.visbile = true;
    },
  },
  beforeCreate() {},
  created() {},
};
</script>

<style lang="scss" scoped>
#countrySelect {
}
</style>
