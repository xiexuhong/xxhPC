<template lang="pug">
    #payValid
        slot
        iframe#myFrame(src="http://192.168.1.193:3000" v-if="visible")
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['lang']),
  },
  watch: {
    visible(val) {
      if (val) {
        this.$nextTick(() => {
          const iframe = document.querySelector('#myFrame');
          iframe.onload = () => {
            iframe.contentWindow.postMessage({ type: 'load', lang: this.lang }, '*');
          };
          window.addEventListener('message', this.getMessage);
        });
      }
    },
  },
  methods: {
    getMessage(e) {
      this.$emit('update:visible', false);
      this.$emit('pay', { token: e.data.token, black: e.data.black });
    },
  },
  mounted() {},
  beforeDestroy() {
    window.removeEventListener('message', this.getMessage);
  },
};
</script>

<style lang="scss" scoped>
#payValid {
  #myFrame {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(204, 204, 204, 0.4);
  }
}
</style>
