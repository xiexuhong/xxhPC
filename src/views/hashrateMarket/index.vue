<template>
  <div id="frame">
    <a-row type="flex" justify="center">
      <a-col :span="24">
        <HashrateMarketHeader></HashrateMarketHeader>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="24">
        <a-tabs
          defaultActiveKey="1"
          size="large"
          :tabBarStyle="{width: '100%', background: '#FFFFFF', textAlign:'center'}"
        >
          <a-tab-pane tab="加密算力" key="1">
            <HashrateShop></HashrateShop>
          </a-tab-pane>
          <a-tab-pane tab="增值服务" key="2">
            <ValueAddService></ValueAddService>
          </a-tab-pane>
        </a-tabs>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import HashrateMarketHeader from '@/components/hashrateMarketHeader';
import HashrateShop from './hashrateShop';
import ValueAddService from './valueAddService';

export default {
  components: {
    HashrateMarketHeader,
    HashrateShop,
    ValueAddService,
  },
};
</script>

<style lang="scss">
#frame {
  width: 100%;
  .ant-tabs-nav {
    color: #999999;
    .ant-tabs-tab-active {
      color: #262626;
    }
    .ant-tabs-tab:hover {
      color: #ffab32;
    }
  }
  .ant-tabs-ink-bar {
    background-color: #ffab32;
  }
}
</style>