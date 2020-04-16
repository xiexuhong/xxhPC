<template>
  <div class="hashHeader">
    <p class="msgTit">{{ msgTit }}</p>
    <p class="msgDet">{{ msgDet }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msgTit: '多样化算力产品自由选择',
      msgDet: '行业内率先实现算力资产基于公链的去中心化管理',
    };
  },
};
</script>

<style lang="scss" scoped>
.hashHeader {
  height: 15rem;
  width: 100%;
  background-color: #000000;
  text-align: center;
  padding-top: 6%;
  .msgTit {
    color: #ffffff;
    font-weight: bolder;
    font-size: 2rem;
  }
  .msgDet {
    color: #ffffff;
    font-weight: lighter;
  }
}

@media screen and (max-width: 700px) {
  .hashHeader {
    height: 7rem;
    width: 100%;
    background-color: #000000;
    text-align: center;
    padding-top: 6%;
    .msgTit {
      color: #ffffff;
      font-weight: bolder;
      font-size: 1.2em;
    }
    .msgDet {
      color: #ffffff;
      font-weight: lighter;
    }
  }
}
</style>