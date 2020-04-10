<template lang="pug">
  #country
    ul.menu
        li.item(v-for="item in menuArr" :key="item")
            a(@click="selectCountry = item") {{item}}
    ul.country
        li.item(v-for="item in selectData" :key="item.id")
            a {{item.name}}({{item.number}})
</template>

<script>
import { getCountry } from '@/script/api';
export default {
  data() {
    return {
      menuArr: [],
      countryData: [],
      selectCountry: '',
    };
  },
  computed: {
    selectData() {
      const data = this.countryData.filter(e => e.name === this.selectCountry)[0];
      return data ? data.countrys : [];
    },
  },
  methods: {
    async init() {
      const res = (await getCountry('zh_cn')).default;
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

<style lang="scss">
#country {
  max-width: 1200px;
  margin: 0 auto;
  height: 80vh;
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
      padding: 5px 10px;
    }
  }
}
</style>
