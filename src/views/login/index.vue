<template lang="pug">
  #login {{$t('home.hello')}}
    button(@click="changeLang") click
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
