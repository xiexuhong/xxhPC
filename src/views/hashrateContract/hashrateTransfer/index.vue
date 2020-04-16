<template>
  <div class="contractListContainer">
    <div class="listContent">
      <a-tabs
        defaultActiveKey="2"
        size="large"
        :tabBarStyle="{width: '100%', background: '#FFFFFF', 
    margin: 0}"
      >
        <a-tab-pane tab="我承接的" key="1">
          <Continue></Continue>
        </a-tab-pane>
        <a-tab-pane tab="我转让的" key="2">
          <Transfer></Transfer>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>
import Continue from './continue';
import Transfer from './transfer';
export default {
  components: {
    Continue,
    Transfer,
  },
};
</script>

<style lang="scss" scoped>
.contractListContainer {
  width: 100%;
}
.listContent {
  /deep/.ant-tabs-nav {
    color: #999999;
    /deep/.ant-tabs-tab-active {
      color: #262626;
    }
    /deep/.ant-tabs-tab:hover {
      color: #ffab32;
    }
  }
  /deep/.ant-tabs-ink-bar {
    background-color: #ffab32;
  }
}

@media screen and (max-width: 500px) {
}
</style>