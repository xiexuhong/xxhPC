<template lang="pug">
  #country
    ul.menu
        li.item(v-for="item in menuArr" :key="item")
            a(@click="selectCountry = item") {{item}}
    ul.country
        li.item(v-for="item in selectData" :key="item.id" @click="chooseCountry(item)")
            a {{item.name}}
            span.number {{item.number}}
</template>

<script>
import { getCountry } from '@/script/api';
import { mapGetters, mapMutations } from 'vuex';
export default {
  data() {
    return {
      menuArr: [],
      countryData: [],
      selectCountry: '',
    };
  },
  computed: {
    ...mapGetters(['lang', 'deviceType']),
    selectData() {
      const data = this.countryData.filter(e => e.name === this.selectCountry)[0];
      return data ? data.countrys : [];
    },
  },
  watch: {
    lang(val) {
      this.init();
    },
  },
  methods: {
    ...mapMutations(['changeCountry']),
    chooseCountry(data) {
      this.changeCountry(data);
      if (this.deviceType === 'mobile') {
        this.$router.back();
        return;
      }
      this.$emit('close');
    },
    async init() {
      const res = (await getCountry(this.lang)).default;
      this.countryData = res;
      this.selectCountry = res[0].name;
      this.menuArr = res.map(e => e.name);
    },
  },
  beforeCreate() {},
  created() {
    this.init();
  },
};
</script>

<style lang="scss" scoped>
#country {
  max-width: 1200px;
  margin: 0 auto;
  .menu {
    display: flex;
    flex-wrap: wrap;
    .item {
      padding: 0 10px;
    }
  }
  .country {
    display: flex;
    flex-wrap: wrap;
    .item {
      background: #fff;
      padding: 5px 10px;
      margin-bottom: 10px;
      width: 100%;
      height: 50px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
