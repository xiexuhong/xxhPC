<template lang="pug">
  <div id="digiccy">

    <h2>Digiccy</h2>
    
  </div>
</template>

<script>
import { setup } from '@/locales';
export default {
  
  data() {
    return {};
  },
  methods: {
    changeLang() {
      setup('en');
    },
  },
  created() {
    console.log(this.$route.query);
  },
};
</script>

<style lang="scss"></style>
