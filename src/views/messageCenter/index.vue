<template lang="pug">
    #messageCenter(:style="style")
        .contain(:class="{isComponent}")
            a-tabs(defaultActiveKey="1" @change="tabChange")
                a-tab-pane(tab="系统通知" key="1")
                    MessageList(:isComponent="isComponent")
                a-tab-pane(tab="算力变更" key="2")
                a-tab-pane(tab="资产变更" key="3")
            .bottom(v-if="isComponent")
                a.allRead 全部标记为已读
                a.more(@click="lookMore") 查看全部>
</template>

<script>
import { mapGetters } from 'vuex';
import MessageList from './list';
export default {
  components: { MessageList },
  props: {
    isComponent: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['deviceType']),
    style() {
      if (this.isComponent) return `min-height:0;padding:0;`;
      if (this.deviceType === 'desktop') {
        return `min-height:calc(100vh - 350px);`;
      } else {
        return `min-height:calc(100vh - 147px);`;
      }
    },
  },
  methods: {
    lookMore() {
      this.$router.push('/messageCenter');
      this.$emit('close');
    },
    tabChange(key) {},
  },
};
</script>

<style lang="scss" scoped>
#messageCenter {
  background: rgba(246, 246, 246, 1);
  padding: 20px 0;
  .contain {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    background: #fff;
    box-sizing: border-box;
    padding: 0 20px;
    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      .allRead {
        font-size: 14px;
        font-weight: 400;
        color: rgba(255, 171, 50, 1);
      }
      .more {
        font-size: 14px;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
      }
    }
  }
  .isComponent {
    width: 400px;
  }
}
</style>
