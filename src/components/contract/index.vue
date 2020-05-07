<template>
  <div v-html="contract"></div>
</template>

<script>
import { getContract } from '@/script/api';
import { deleteScrip } from '@/script/utils';
export default {
  data() {
    return {
      contract: '',
    };
  },
  created() {
    // console.log(this.$route.query.type);
    getContract({ type: this.$route.query.type }).then(resp => {
      this.contract = deleteScrip(resp);
    });
  },
};
</script>

<style lang="scss" scoped>
</style>