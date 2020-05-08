<template lang="pug">
    #payValid
        a-button(type="primary")(v-if="!showValid" @click="rent") 下单
        iframe#myFrame(src="http://192.168.1.193:3000" v-else)
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    is_captcha: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      showValid: false,
    };
  },
  computed: {
    ...mapGetters(['lang']),
  },
  watch: {
    showValid(val) {
      if (val) {
        this.$nextTick(() => {
          const iframe = document.querySelector('#myFrame');
          iframe.onload = () => {
            console.log(1);
            iframe.contentWindow.postMessage({ type: 'load', lang: this.lang }, '*');
          };
          window.addEventListener('message', this.getMessage);
        });
      }
    },
  },
  methods: {
    getMessage(e) {
      this.showValid = false;
      this.$emit('pay', e.data.token);
    },
    rent() {
      if (this.is_captcha === 1) {
        this.showValid = true;
      } else {
        this.$emit('pay', '');
      }
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
  }
}
</style>
